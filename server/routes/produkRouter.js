import {getProduk,getProdukById,createProduk,editProduk,deleteProduk,getMyProduk,searchProduk} from "../controler/produkControler.js"
import {getProdukByKategory} from "../controler/kategoryControler.js"
import express from "express"
import {verifyLogin} from "../middleware/verify.js"
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

export default router