import fs from "fs";

export const cfg = {

    options : {
        key  : fs.readFileSync(process.env.localSSl ? process.env.localSSl+"/key.key" : "/ssl/key.key"),
        cert : fs.readFileSync(process.env.localSSl ? process.env.localSSl+"/cert.crt" : "/ssl/cert.crt")
    },

    logPath: process.env.ordersLogPath || './log/server.log',

    doc: '/api-docs',

    protocol: "https",

    logFormat: " :method :url :status :datetime :res[content-length] - :response-time ms :body",

    PORT : 2509
}

export const dbCon = {
    /*---------------POSTGRES----------------*/
    PGUSER: process.env['PGUSER'],
    PGHOST: process.env['PGHOST'],
    PGPASSWORD: process.env['PGPASSWORD'],
    PGPORT: process.env['PGPORT'],

    /*---------------MYSQLI-------------------*/
    MSQLIUSER: process.env['MSQLIUSER'],
    MSQLIHOST: process.env['MSQLIHOST'],
    MSQLIPASSWORD: process.env['MSQLIPASSWORD'],
    MSQLIPORT: process.env['MSQLIPORT'],
}

export const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

export const apiVersions = {
    v1: {
        doc: './source/v1/docs.yaml'
    }
}
