import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user.js'
const app = express()
const port = 9999
// using middleware
app.use(express.json())
// Mongoose
mongoose.connect("mongodb://localhost:27017/", {
    dbName: "APi"
}).then(() => console.log("Connected")).catch(() => console.log("Disconnected"))

app.use("/users",router)

app.get('/', (req, res) => {
    res.send('Learning Postman')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})