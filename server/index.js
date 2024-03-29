const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const userRouter = require("./routes/userRouter.js")
const followRouter = require("./routes/followRouter.js")
const kategoriRouter = require("./routes/kategoriRouter.js")
const beliRouter = require("./routes/beliRouter.js")
const AuthRouter = require("./routes/AuthRouter.js")
const produkRouter = require("./routes/produkRouter.js")
const fotoProdukRouter = require("./routes/fotoProdukRouter.js")
const keranjangRouter = require("./routes/keranjangRouter.js")
const penilaianRouter = require("./routes/penilaianRouter.js")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
dotenv.config()

const app=express()

app.use(cors({credentials:true,origin:"http://localhost:5173"}))
app.use(express.json())
app.use(fileUpload())
app.use(express.static("./public"))
app.use(cookieParser())

app.use("/user/follow",followRouter)
app.use("/user",userRouter)
app.use("/kategori",kategoriRouter)
app.use(AuthRouter)
app.use("/produk/foto",fotoProdukRouter)
app.use("/produk",produkRouter)
app.use("/beli",beliRouter)
app.use("/keranjang",keranjangRouter)
app.use("/penilaian",penilaianRouter)

app.listen(process.env.PORT,()=>{
  console.log("server runing")
})