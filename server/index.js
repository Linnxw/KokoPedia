import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import followRouter from "./routes/followRouter.js"
import kategoriRouter from "./routes/kategoriRouter.js"
import beliRouter from "./routes/beliRouter.js"
import AuthRouter from "./routes/AuthRouter.js"
import produkRouter from "./routes/produkRouter.js"
import fotoProdukRouter from "./routes/fotoProdukRouter.js"
import keranjangRouter from "./routes/keranjangRouter.js"
import penilaianRouter from "./routes/penilaianRouter.js"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
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