import express from "express"
import {getMyKeranjang,getMyKeranjangById,addKeranjang,deleteMyKeranjang} from "../controler/keranjangControler.js"
import {verifyLogin} from "../middleware/verify.js"
const router=express.Router()

router.use(verifyLogin)
router.get("/",getMyKeranjang)
router.get("/:id",getMyKeranjangById)
router.post("/",addKeranjang)
router.delete("/:id",deleteMyKeranjang)

export default router