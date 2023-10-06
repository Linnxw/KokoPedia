const express = require("express")
const {getMyKeranjang,getMyKeranjangById,addKeranjang,deleteMyKeranjang} = require("../controler/keranjangControler.js")
const {verifyLogin} = require("../middleware/verify.js")
const router=express.Router()

router.use(verifyLogin)
router.get("/",getMyKeranjang)
router.get("/:id",getMyKeranjangById)
router.post("/",addKeranjang)
router.delete("/:id",deleteMyKeranjang)

module.exports = router