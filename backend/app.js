import express from 'express';
import sessions from 'express-session';
import cors from 'cors';

import setupPassport from './auth/passport';
import setRoutes from './routes';

import UserModel from './models/User.js';

import Connection from './db.js';
const databaseConnection = new Connection('mongodb://127.0.0.1:27017/', 'capstone');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: '*'}));

setupPassport(app);



app.use(
  express.static(process.cwd()+'/dist/capstone-frontend')
);
setRoutes(app);


export default app;
