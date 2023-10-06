const {LoginUser,LogoutUser,getAccesToken} = require("../auth/Auth.js")
const express = require("express") 

const router=express.Router()

router.post("/login",LoginUser)
router.delete("/logout",LogoutUser)
router.get("/token",getAccesToken)

module.exports = router