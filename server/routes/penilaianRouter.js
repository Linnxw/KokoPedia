import express from "express"
import {getPenilaian,addPenilaian,editPenilaian,deletePenilaian,getPenilaianProduk} from "../controler/penilaianControler.js"
import {verifyLogin} from "../middleware/verify.js"
const router = express.Router()

router.get("/",getPenilaian)
router.get("/:id",getPenilaianProduk)
router.use(verifyLogin)
router.post("/:id",addPenilaian)
router.patch("/:id",editPenilaian)
router.delete("/:id",deletePenilaian)

export default router