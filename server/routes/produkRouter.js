const {getProduk,getProdukById,createProduk,editProduk,deleteProduk,getMyProduk,searchProduk} = require("../controler/produkControler.js")
const {getProdukByKategory} = require("../controler/kategoryControler.js")
const express = require("express")
const {verifyLogin} = require("../middleware/verify.js")
const router=express.Router()

router.get("/",getProduk)
router.get("/kategory",getProdukByKategory)
router.get("/search",searchProduk)
router.get("/me",verifyLogin,getMyProduk)
router.get("/:id",getProdukById)
router.use(verifyLogin)
router.post("/",createProduk)
router.patch("/:id",editProduk)
router.delete("/:id",deleteProduk)

module.exports = router