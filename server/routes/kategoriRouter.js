const express = require("express")
const {getKategori,getKategoriById,createKategori,deleteKategori} = require("../controler/kategoryControler.js")
const {verifyLogin} = require("../middleware/verify.js")
const router=express.Router()

router.get("/",getKategori)
router.get("/:id",getKategoriById)
router.use(verifyLogin)
router.post("/",createKategori)
router.delete("/:id",deleteKategori)

module.exports = router