import { app } from "./app"
import { Mongodb } from "./data/database"
const port = 9999

Mongodb()

export default server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})