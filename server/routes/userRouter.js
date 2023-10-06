const express = require("express")
const {getAllUser,getUserById,createUser,editUser,deleteUser,searchUser,getMe} = require("../controler/userControler.js")
const {verifyLogin,adminOnly} = require("../middleware/verify.js")

const router=express.Router()

router.post("/",createUser)
router.use(verifyLogin)
router.get("/me",getMe)
router.get("/",adminOnly,getAllUser)
router.get("/search/:search",searchUser)
router.get("/:id",getUserById)
router.patch("/",editUser)
router.delete("/:id",deleteUser)

module.exports = router