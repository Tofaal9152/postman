import mongoose from "mongoose";

export const Mongodb = () => {

    mongoose.connect(process.env.DATA_URI, {
        dbName: "APi"
    }).then(() => console.log("Connected")).catch(() => console.log("Disconnected"))

}