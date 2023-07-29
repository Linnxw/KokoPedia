import {getFotoProduk,getFotoProdukById,addFotoProduk,deleteFotoProduk} from "../controler/produkControler.js"
import express from "express"
import {verifyLogin} from "../middleware/verify.js"
const router=express.Router()


router.get("/",getFotoProduk)
router.get("/:id",getFotoProdukById)
router.use(verifyLogin)
router.delete("/:id",deleteFotoProduk)
router.post("/:id",addFotoProduk)

export default router