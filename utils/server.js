import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import morgan from 'morgan';
import cors from 'cors';
import {middleSecure} from "./middleSecure";
import * as fs from "fs";
import * as path from "path";
import {apiVersions, cfg, corsOptions} from "../config/config";
import {morganExt} from "../source/v1/globals/ext/morganExtension";
import {Patch} from "../source/v1/listener/patch";
import {Post} from "../source/v1/listener/post";
import {Put} from "../source/v1/listener/put";
import {Get} from "../source/v1/listener/get";

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express()
const apiDefinition = YAML.load(apiVersions.v1.doc);

const accessLogStream = fs.createWriteStream(path.join(cfg.logPath), { flags: 'a' })

for (const ext in morganExt)
    morgan.token(ext, morganExt[ext])

app.use(morgan(cfg.logFormat, {stream: accessLogStream}))

app.use(bodyParser.json({ limit: '50mb' }))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(cfg.doc, swaggerUi.serve, swaggerUi.setup(apiDefinition, { explorer: false }));

cors(corsOptions)

app.use(cors());

// for (const [key, obj] in [{'get':Get}, {'post':Post}, {'put':Put}, {'patch':Patch}])
//     for (const endpoint in obj)
//         app[key](endpoint, middleSecure, obj[endpoint])

for (const endpoint in Get)
    app.get(endpoint, middleSecure, Get[endpoint])

for (const endpoint in Post)
    app.post(endpoint, middleSecure, Post[endpoint])

for (const endpoint in Put)
    app.put(endpoint, middleSecure, Put[endpoint])

for (const endpoint in Patch)
    app.patch(endpoint, middleSecure, Patch[endpoint])

module.exports = app