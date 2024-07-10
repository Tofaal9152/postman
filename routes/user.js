import express from "express";
import { alluser, insertuser, singleuser } from "../controllers/user.js";
import { Mongodb } from "../data/database.js";

const router = express.Router()



router.get('/all', alluser)
router.post('/new', insertuser)
router.get('/id/:iid', singleuser)

export default router