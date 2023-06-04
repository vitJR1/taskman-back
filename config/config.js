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

    PORT : 8080
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
