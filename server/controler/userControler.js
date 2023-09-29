import db from "../config/Database.js"
import fs from "fs"
import path from "path"
import {getCountFollow} from "./followControler.js"
import passwordHash from "password-hash"
export const getAllUser=(req,res)=>{
    const sql="SELECT u.id,u.nama,u.email,u.alamat,u.ft_prfl,u.url,u.role FROM user as u"
    db.query(sql,(err,field)=>{
      if(err) return res.status(500).json({msg:err.message})
      res.status(200).json(field)
    })

}

export const getMe=(req,res)=>{
    const sql=`SELECT u.id,u.nama,u.email,u.alamat,u.ft_prfl,u.url,u.role FROM user as u WHERE email = '${req.email}'`
    db.query(sql,(err,field)=>{
      if(err){
        console.log(err)
      }
      res.status(200).json(field[0])
    })

}

export const getUserById=(req,res)=>{
 
    const sql=`SELECT id,nama,email,alamat,ft_prfl,url,role FROM user WHERE id = ${req.params.id}`
    db.query(sql,(err,field)=>{
      if(err){
        console.log(err)
      }
      if(field.length === 0)
      return res.status(404).json({msg:"user tidak ditemukan"})
      res.status(200).json(field)
    })

}

export const createUser=(req,res)=>{
  const {nama,email,password,confPassword,role,alamat}=req.body
  let myRole;
  if(!role){
    myRole="user"
  }else{
    myRole=role
  }
    if(!req.files)
    return res.status(400).json({msg:"tidak ada image yg dipilih"})
    
    //password
  
    if(password !== confPassword)
    return res.status(400).json({msg:"password dan dan konfirm password harus sama"})
    
    if(password.length < 3)
    return res.status(400).json({msg:"panjang marakter harus lebih dari 3"})
    const hash=passwordHash.generate(password)
    //Foto Profile 
    const file=req.files.file
    const fileSize=file.data.length
    const ext=path.extname(file.name)
    const uniqeu=new Date().getTime()
    const fileName=file.md5 + uniqeu +ext
    const aloweType=['.jpg','.png','.jpeg']
     
    if(!aloweType.includes(ext.toLowerCase()))
    return res.status(400).json({msg:"hanya bisa mengirim image"})
    const url=`${req.protocol}://${req.get('host')}/user/${fileName}`
    file.mv(`./public/user/${fileName}`,(err)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      
      const sql=`INSERT INTO user (nama,email,password,ft_prfl,url,role,alamat) VALUES ('${nama}','${email}','${hash}','${fileName}','${url}','${myRole}','${alamat}')`
      
      db.query(sql,(err,field)=>{
        if(err)
        return res.status(500).json({msg:err.message})
        res.status(200).json({msg:"succes",data:{nama,email,hash,fileName,url,role,alamat}})
      })
      
    })

}

export const editUser=(req,res)=>{
 
   const {nama,email,password,confPassword,role,alamat}=req.body 
   if(password !== confPassword)
    return res.status(400).json({msg:"password dan konfirm password tidak sama"})
    
    if(password.length < 3)
    return res.status(400).json({msg:"password harus lebih dari 3 karakter"})
    const hash=passwordHash.generate(password)
    let newFotoProfile;
    db.query(`SELECT * FROM user WHERE email = '${req.email}'`,(err,field)=>{
    if(err)
    return res.status(500).json({msg:err.message})
      if(!field[0])
      return res.status(404).json({msg:"user tidak ditemukan"})
      
      if(!req.files){
        newFotoProfile=field[0].ft_prfl
      }else{
    const file=req.files.file
    const fileSize=file.data.length
    const ext=path.extname(file.name)
    const uniqeu=new Date().getTime()
    newFotoProfile=file.md5 + uniqeu +ext
    const aloweType=['.jpg','.png','.jpeg']
     
    if(!aloweType.includes(ext.toLowerCase()))
    return res.status(400).json({msg:"hanya bisa mengirim image"})
    if(fileSize > 5000000)
    
    return res.status(402).json({msg:"besar image harus dibawah 5mb"})
 
    fs.unlinkSync(`./public/user/${field[0].ft_prfl}`)
    
    file.mv(`./public/user/${newFotoProfile}`,(err)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      
    })
      }
    
    const url=`${req.protocol}://${req.get('host')}/user/${newFotoProfile}`
   const sql=`UPDATE user SET nama = '${nama ? nama :field[0].nama}',email = '${email ? email : field[0].email}',password = '${hash ? hash : field[0].password}',ft_prfl = '${newFotoProfile}',url = '${url}',alamat = '${alamat ? alamat : field[0].alamat}' WHERE email = '${req.email}'`
      
      db.query(sql,(err,field)=>{
        if(err)
        return res.status(500).json({msg:err.message})
        res.status(200).json({msg:"succes"})
      })
    })

}

export const deleteUser=(req,res)=>{
   db.query(`SELECT id,ft_prfl FROM user WHERE id = ${req.params.id}`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      fs.unlinkSync(`./public/user/${result[0].ft_prfl}`)
      db.query(`DELETE FROM user WHERE id = ${result[0].id}`,(err,result)=>{
        if(err)
        return res.status(500).json({msg:err.message})
        res.status(200).json({msg:"berhasil hapus user"})
      })
    })
}

export const searchUser=(req,res)=>{
  const sql=`SELECT * FROM user WHERE nama LIKE '%${req.params.search}%' or email LIKE '%${req.params.search}%'`

  db.query(sql,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"tidak ada hasil pencarian yg cocok"})
    res.status(200).json(result)
  })
}

