import express from 'express'
import router from './routes/user.js'
export const app = express()
const port = 9999

app.use("/users",router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})