import express from "express"
import {getFollowUser,getFollowUserById,follow,getCountFollow} from "../controler/followControler.js"
import {verifyLogin} from "../middleware/verify.js"

const router=express.Router()

router.get("/count",getCountFollow)
router.get("/:id",getFollowUserById)
router.use(verifyLogin)
router.get("/",getFollowUser)
router.post("/",follow)

export default router