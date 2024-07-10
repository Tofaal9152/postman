import mongoose from "mongoose";

export const Mongodb = () => {

    mongoose.connect("mongodb://localhost:27017/", {
        dbName: "APi"
    }).then(() => console.log("Connected")).catch(() => console.log("Disconnected"))

}