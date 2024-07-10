import express from "express";
import { alluser, insertuser, singleuser } from "../controllers/user.js";
const router = express.Router()

router.get('/all', alluser)
router.post('/new', insertuser)
router.get('/id/:iid', singleuser)

export default router