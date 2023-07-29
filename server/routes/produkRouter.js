import {getProduk,getProdukById,createProduk,editProduk,deleteProduk,getMyProduk} from "../controler/produkControler.js"
import express from "express"
import {verifyLogin} from "../middleware/verify.js"
const router=express.Router()

router.get("/",getProduk)
router.get("/me",verifyLogin,getMyProduk)
router.get("/:id",getProdukById)
router.use(verifyLogin)
router.post("/",createProduk)
router.patch("/:id",editProduk)
router.delete("/:id",deleteProduk)

export default router