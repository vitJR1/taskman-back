const {cfg} = require('./config/config')
const http = require(cfg.protocol);
const {encrypt} = require("tools-pack/crypt/crypt");
const app = require('./utils/server');

http.createServer(cfg.options, app).listen(cfg.PORT);

console.log("token: " + encrypt('{"userId":1,"prefix":"iceberg"}'))

console.log(`Server listening on port ${cfg.PORT}!`)