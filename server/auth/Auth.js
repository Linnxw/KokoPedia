import db from "../config/Database.js"
import jwt from "jsonwebtoken"
import passwordHash from "password-hash"

export const LoginUser=(req,res)=>{
  if(req.cookies.refreshToken)
  return res.status(500).json({msg:"anda masih dalam keadaan login"})
  
  const {email,password}=req.body
  
  if(email.length <= 10)
  return res.status(400).json({msg:"email harus lebih dari 10 karakter"})
  if(password.length < 3)
  return res.status(400).json({msg:"password harus lebih dari 2 karakter"})
  
  db.query(`SELECT * FROM user WHERE email LIKE '%${email}%'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"email tidak terdaftar"})
    const match=passwordHash.verify(password,result[0].password)
    if(!match)
    return res.status(401).json({msg:"password salah"})
    const data={
      id:result[0].id,
      nama:result[0].nama,
      email:result[0].email,
      role:result[0].role
    }
    const accesToken=jwt.sign(data,process.env.ACCES_TOKEN_SECRET,{
      expiresIn:'40s'
    })
    const refreshToken=jwt.sign(data,process.env.REFRESH_TOKEN_SECRET,{
      expiresIn:'1d'
    })
    
    res.cookie('refreshToken',refreshToken,{
      maxAge:24*60*60*1000,
      httpOnly:true
    })
    db.query(`UPDATE user SET refresh_token = '${refreshToken}' WHERE id = ${result[0].id}`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      res.status(200).json(accesToken)
    })
  })
}

export const LogoutUser=(req,res)=>{
 const token=req.cookies.refreshToken
 if(!token)
 return res.status(401).json({msg:"anda belum login"})
 const sql=`SELECT * FROM user WHERE refresh_token = '${token}'`
 
  db.query(sql,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"user tidak ditemukan"})
    
    db.query(`UPDATE user SET refresh_token = ${null} WHERE id = ${result[0].id}`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      res.clearCookie('refreshToken')
      res.status(200).json({msg:"berhasil logout"})
    })
  })
}

export const getAccesToken=(req,res)=>{
  const refreshToken=req.cookies.refreshToken
  
  if(!refreshToken)
  return res.status(401).json({msg:"anda belum login"})
  
  db.query(`SELECT * FROM user WHERE refresh_token = '${refreshToken}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"user tidak ditemukan"})
    
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decode)=>{
     if(err)
     return res.sendStatus(403)
    const data={
      id:result[0].id,
      nama:result[0].nama,
      email:result[0].email,
      role:result[0].role
    }
    const accesToken=jwt.sign(data,process.env.ACCES_TOKEN_SECRET,{
      expiresIn:'40s'
    })
    res.status(200).json({accesToken})
  })
  })
}