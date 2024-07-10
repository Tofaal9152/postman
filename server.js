import { app } from "./app.js"
import { Mongodb } from "./data/database.js"
import { config } from 'dotenv'

config({
    path:"./data/config.env"
}) 

Mongodb()
app.listen(process.env.PORT, () => {
    console.log(`Server is working`)
}) 