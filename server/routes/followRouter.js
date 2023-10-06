const express = require("express")
const {getFollowUser,getFollowUserById,follow,getCountFollow} = require("../controler/followControler.js")
const {verifyLogin} = require("../middleware/verify.js")

const router=express.Router()

router.get("/count",getCountFollow)
router.get("/:id",getFollowUserById)
router.use(verifyLogin)
router.get("/",getFollowUser)
router.post("/",follow)

module.exports = router