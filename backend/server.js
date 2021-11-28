import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes.js"
import cors from 'cors';

import { Connection } from './db.js';

const server = express();
server.use(bodyParser.json());
server.use(cors({origin: '*'}));

server.use(
    express.static(process.cwd()+"/dist/capstone-frontend")
);

setRoutes(server);

export default server;
