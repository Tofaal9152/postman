import { User } from "../models/user";

export const insertuser = async (req, res) => {
    const { name, email, password } = req.body
    const users = await User.create({
        name: name,
        email: email,
        password: password
    })
    res.status(201).cookie("key 1", "value 1").json({
        success: true,
        message: "successful users/all"
    })
}
export const user = async (req, res) => {
    const id = req.params.iid
    const users = await User.findById(id)
    res.json({
        success: true,
        users
    })
}
export const alluser = async (req, res) => {
    const users = await User.find({})
    console.log(req.query);
    res.json({
        success: true,
        users
    })
}