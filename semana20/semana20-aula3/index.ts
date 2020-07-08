import express from "express";
import cors from "cors";
import serverless from 'serverless-http'
import app from '../l'

const app = express();
app.use(cors({ origin: true }));

