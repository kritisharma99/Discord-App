import express from 'express'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDb from "./config/db.js"

import authRoutes from "./routes/authRoutes.js"
dotenv.config()
connectDb()

const PORT = process.env.PORT || process.env.API_PORT
const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/auth',authRoutes)

const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})