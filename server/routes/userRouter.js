import express from "express"
import {getAllUser,getUserById,createUser,editUser,deleteUser,searchUser,getMe} from "../controler/userControler.js"
import {verifyLogin,adminOnly} from "../middleware/verify.js"

const router=express.Router()


router.post("/",createUser)
router.use(verifyLogin)
router.get("/me",getMe)
router.get("/",adminOnly,getAllUser)
router.get("/search/:search",searchUser)
router.get("/:id",getUserById)
router.patch("/",editUser)
router.delete("/:id",deleteUser)

export default router