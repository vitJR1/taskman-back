import {log} from "nodemon/lib/utils";

const { Pool } = require('pg');
const cfg = require('../../../config/config')

export const query = async (req, db) => {

    const config = Object.assign(req.dbConnection.options, {
        database: db,
        user: cfg.dbCon.PGUSER,
        password: cfg.dbCon.PGPASSWORD,
    });

    try {
        const client = await new Pool(config).connect();

        req.res.on('finish', () => {
            client.release()
            client.end()
        });

        return async (query, values = [], extra = {}) => {
            const log = ()=> {
                let printLog = query + ' ';
                if(values.length > 0) {
                    Array
                        .from(new Set(query.match(/\$\d/g)
                            .map(e => +e.replaceAll('$', ''))))
                        .forEach(e => printLog = printLog.replaceAll('$'+e, values[e - 1]))
                }
                console.log(printLog)
            }
            try {
                extra = Object.assign({
                    rowMode: 'object',
                    log: false,
                    full: false
                }, extra)

                if(extra.log)
                    log()

                return client.query({
                    rowMode: extra.rowMode,
                    text: query,
                    values
                })
                    .then(e=>{
                        return extra.full ? e : e.rows
                    })
                    .catch(e=>{
                        console.error(e.message)
                        return false
                    })
            }catch (e){
                console.log(e.message)
                return null
            }
        }
    }catch (e){
        console.log(e.message)
        return false
    }
}