import express from 'express'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDb from "./config/db.js"

dotenv.config()
connectDb()

const PORT = process.env.PORT || process.env.API_PORT
const app = express()
app.use(express.json())
app.use(cors())

const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`server is litening on ${PORT}`)
})