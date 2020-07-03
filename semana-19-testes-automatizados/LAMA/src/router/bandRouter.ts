import express from "express";


export const bandRouter = express.Router()
bandRouter.post("/band", new BandController().createBand)
