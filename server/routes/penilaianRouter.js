const  express = require("express")
const  {getPenilaian,addPenilaian,editPenilaian,deletePenilaian,getPenilaianProduk} = require("../controler/penilaianControler.js")
const  {verifyLogin} = require("../middleware/verify.js")
const router = express.Router()

router.get("/",getPenilaian)
router.get("/:id",getPenilaianProduk)
router.use(verifyLogin)
router.post("/:id",addPenilaian)
router.patch("/:id",editPenilaian)
router.delete("/:id",deletePenilaian)

module.exports = router