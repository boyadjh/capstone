import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes.js"
import cors from 'cors';

const passport = require('passport');

import { Connection } from './db.js';

const server = express();
server.use(bodyParser.json());
server.use(cors({origin: '*'}));

server.use(
    express.static(process.cwd()+"/dist/capstone-frontend")
);

server.use(passport.initialize(undefined));
server.use(passport.session(undefined));

setRoutes(server);

export default server;
