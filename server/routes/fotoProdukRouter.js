const {getFotoProduk,getFotoProdukById,addFotoProduk,deleteFotoProduk} = require("../controler/produkControler.js")
const express = require("express")
const {verifyLogin} = require("../middleware/verify.js")
const router=express.Router()


router.get("/",getFotoProduk)
router.get("/:id",getFotoProdukById)
router.use(verifyLogin)
router.delete("/:id",deleteFotoProduk)
router.post("/:id",addFotoProduk)

module.exports = router