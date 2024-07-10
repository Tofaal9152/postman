import express from "express";
import { alluser, insertuser, user } from "../controllers/user.js";

const router = express.Router()

router.get('/all', alluser)
router.post('/new', insertuser )
router.get('/id/:iid',user)

export default router