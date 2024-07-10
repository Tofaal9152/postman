import express from 'express'
import router from './routes/user.js'

export const app = express()

app.use("/users",router)

