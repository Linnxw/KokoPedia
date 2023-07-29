import express from "express"
import {getKategori,getKategoriById,createKategori,deleteKategori} from "../controler/kategoryControler.js"
import {verifyLogin} from "../middleware/verify.js"
const router=express.Router()

router.get("/",getKategori)
router.get("/:id",getKategoriById)
router.use(verifyLogin)
router.post("/",createKategori)
router.delete("/:id",deleteKategori)

export default router