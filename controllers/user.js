import { User } from "../models/user.js";
export const alluser = async (req, res) => {
    const allUsers = await User.find({})
    console.log(req.query);
    res.json({
        success: true,
        allUsers
    })
}
export const insertuser = async (req, res) => {
    const { name, email, password } = req.body
    await User.create({
        name: name,
        email: email,
        password: password
    })
    res.status(201).cookie("key 1", "value 1").json({
        success: true,
        message: "successful users/all"
    })
}
export const singleuser = async (req, res) => {
    const id = req.params.iid
    const userInfo = await User.findById(id)
    res.json({
        success: true,
        userInfo
    })
}