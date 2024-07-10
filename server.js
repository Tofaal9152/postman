import { app } from "./app.js"
import { Mongodb } from "./data/database.js"
const port = 9999

Mongodb()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})