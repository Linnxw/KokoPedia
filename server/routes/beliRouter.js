
const {verifyLogin,adminOnly} = require("../middleware/verify.js")
const {getRiwayatBeli,getRiwayatJual,beliProduk,getDetailRiwayatBeli,getDetailRiwayatJual,getMyRiwayatBeli,getMyRiwayatJual} = require("../controler/beliControler.js")
const express = require("express") 
const router=express.Router()

router.use(verifyLogin)
router.get("/riwayat/beli/me",getMyRiwayatBeli)
router.get("/riwayat/jual/me",getMyRiwayatJual)
router.get("/riwayat/beli",adminOnly,getRiwayatBeli)
router.get("/riwayat/beli/:id",getDetailRiwayatBeli)
router.get("/riwayat/jual",adminOnly,getRiwayatJual)
router.get("/riwayat/jual/:id",getDetailRiwayatJual)
router.post("/:id",beliProduk)

module.exports= router 