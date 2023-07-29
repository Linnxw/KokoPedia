import {LoginUser,LogoutUser,getAccesToken} from "../auth/Auth.js"
import express from "express"

const router=express.Router()

router.post("/login",LoginUser)
router.delete("/logout",LogoutUser)
router.get("/token",getAccesToken)

export default router