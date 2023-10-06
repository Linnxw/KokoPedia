const db = require("../config/Database.js")
const jwt = require("jsonwebtoken")
const verifyLogin=(req,res,next)=>{
  const header=req.headers.authorization
  const token=header && header.split(" ")[1]
  if(!token)
  return res.sendStatus(401)
 jwt.verify(token,process.env.ACCES_TOKEN_SECRET,(err,decode)=>{
  if(err)
  return res.sendStatus(403)
   req.email=decode.email
   req.role=decode.role
   next()
  })
}

const adminOnly=(req,res,next)=>{
  req.role === "admin" ? next() : res.status(401).json({msg:"akses ditolak"})
}

module.exports = {adminOnly,verifyLogin}