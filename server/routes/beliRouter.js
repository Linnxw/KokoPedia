import express from "express"
import {getRiwayatBeli,getRiwayatJual,beliProduk,getDetailRiwayatBeli,getDetailRiwayatJual,getMyRiwayatBeli,getMyRiwayatJual} from "../controler/beliControler.js"
import {verifyLogin,adminOnly} from "../middleware/verify.js"
const router=express.Router()

router.use(verifyLogin)
router.get("/riwayat/beli/me",getMyRiwayatBeli)
router.get("/riwayat/jual/me",getMyRiwayatJual)
router.get("/riwayat/beli",adminOnly,getRiwayatBeli)
router.get("/riwayat/beli/:id",getDetailRiwayatBeli)
router.get("/riwayat/jual",adminOnly,getRiwayatJual)
router.get("/riwayat/jual/:id",getDetailRiwayatJual)
router.post("/:id",beliProduk)

export default router 