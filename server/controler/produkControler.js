import db from "../config/Database.js"
import path from "path"
import fs from "fs"
export const getProduk=(req,res)=>{

  db.query("SELECT p.id,p.nma_produk as nama_produk,p.warna,p.berat,p.harga,p.stok,p.deskripsi,p.terjual,p.user_id,p.kategori_id,u.nama,u.email,u.ft_prfl as foto_profil,u.url as url_foto_profil,u.alamat,k.nma_kategori as nama_kategori,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM produk as p JOIN user as u ON (u.id = p.user_id) JOIN kategori as k ON(k.id = p.kategori_id) LEFT JOIN foto_produk as fp ON (fp.produk_id = p.id)",(err,result)=>{
    if(err){
    return res.status(500).json({msg:err?.message})
    }
    res.status(200).json(result)
  })
}

export const getProdukById=(req,res)=>{
  db.query(`SELECT p.id,p.nma_produk as nama_produk,p.warna,p.berat,p.harga,p.stok,p.deskripsi,p.terjual,p.user_id,p.kategori_id,u.nama,u.email,u.ft_prfl as foto_profil,u.url as url_foto_profil,k.nma_kategori as nama_kategori,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM produk as p JOIN user as u ON (u.id = p.user_id) JOIN kategori as k ON(k.id = p.kategori_id) LEFT JOIN foto_produk as fp ON (fp.produk_id = p.id) WHERE p.id = ${req.params.id}`,(err,result)=>{
  console.log(req.params.id)
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}

export const getMyProduk=(req,res)=>{
db.query(`SELECT p.id,p.nma_produk as nama_produk,p.warna,p.berat,p.harga,p.stok,p.deskripsi,p.terjual,p.user_id,p.kategori_id,u.nama,u.email,u.ft_prfl as foto_profil,u.url as url_foto_profil,k.nma_kategori as nama_kategori,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM produk as p JOIN user as u ON (u.id = p.user_id) JOIN kategori as k ON(k.id = p.kategori_id) JOIN foto_produk as fp ON (fp.produk_id = p.id) WHERE user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
})
}

export const createProduk=(req,res)=>{
  const {namaProduk,
    warna,
    berat,
    harga,
    stok,
    deskripsi,
    terjual,
    kategoryId
  }=req.body
  db.query(`SELECT id FROM user WHERE email = '${req.email}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"user tidak ditemukan"})
    db.query(`INSERT INTO produk (nma_produk,warna,berat,harga,stok,deskripsi,terjual,user_id,kategori_id) VALUES('${namaProduk}','${warna}',${berat},${harga},${stok},'${deskripsi}',${terjual},${result[0].id},${kategoryId})`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
     
      return res.status(201).json({id:result.insertId,msg:"berhasil menambahkan produk"})
    } )
  })
  
}

export const editProduk=(req,res)=>{
  const {namaProduk,
    warna,
    berat,
    harga,
    stok,
    deskripsi,
    terjual,
    kategoryId
  }=req.body
  db.query(`SELECT id FROM user WHERE email = '${req.email}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"user tidak ditemukan"})
    db.query(`UPDATE produk SET nma_produk = '${namaProduk}',warna = '${warna}',berat = ${berat},harga = ${harga},stok = ${stok},deskripsi = '${deskripsi}',terjual = ${terjual},kategori_id = ${kategoryId} WHERE id = ${req.params.id}`,(err,resukt)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      res.status(201).json({msg:"berhasil edit produk"})
    } )
  })
}

export const deleteProduk=(req,res)=>{
let userId;
  db.query(`SELECT * FROM user WHERE email = '${req.email}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msh:err.message})
    if(!result[0])
     return res.status(404).json({msg:"user tidak ditemukan"})
    userId=result[0].id
    db.query(`SELECT * FROM produk WHERE id = ${req.params.id}`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      if(!result[0])
      return res.status(404).json({msg:"produk tidak ditemukan"})
      if(result[0].user_id !== userId || req.role === "admin")
      return res.status(403).json({msg:"akses ditolak"})
      db.query(`DELETE FROM produk WHERE id = ${result[0].id}`,(err,result)=>{
        if(err)
        return res.status(500).json({msg:err.message})
        res.status(200).json({msg:"berhasil hapus produk"})
      })
    })
  })
}

export const getFotoProduk=(req,res)=>{
  db.query("SELECT * FROM foto_produk",(err,result)=>{
    if(err)
    return res.status(200).json({msg:err.message})
    res.status(200).json(result)
  })
}
export const getFotoProdukById=(req,res)=>{
  db.query(`SELECT * FROM foto_produk WHERE id = ${req.params.id}`,(err,result)=>{
    if(err)
    return res.status(200).json({msg:err.message})
    res.status(200).json(result[0])
  })
}

export const addFotoProduk=(req,res)=>{
  if(!req.files)
  return res.status(400).json({msg:"tidak ada file yg dipilih"})
  if(req.files.file === null || req.files.file === undefined)
   return res.status(400).json({msg:"anda belum memilih file"})
   
   const file=req.files.file
   const size=file.data.length
   const ext=path.extname(file.name)
   const fileName=file.md5 + new Date().getTime() + ext
   const allowedType=['.jpg','.png','.jpeg','.webp']
   if(!allowedType.includes(ext.toLowerCase()))
   return res.status(400).json({msg:"format file tidak didukung"})
   file.mv(`./public/produk/${fileName}`,(err)=>{
     if(err)
     return res.status(500).json({msg:err.message})
     const url=`${req.protocol}://${req.get('host')}/produk/${fileName}`
     db.query(`INSERT INTO foto_produk (ft_prdk,url,produk_id) VALUES('${fileName}','${url}',${req.params.id})`,(err,result)=>{
       if(err)
       return res.status(500).json({msg:err.message})
       res.status(200).json({msg:"berhasil menambahkan foto produk"})
     })
   })
}

export const deleteFotoProduk=(req,res)=>{
  db.query(`SELECT * FROM foto_produk WHERE id = ${req.params.id}`,(err,result1)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    db.query(`DELETE FROM foto_produk WHERE id = ${req.params.id}`,(err,result)=>{
   if(err)
   return res.status(500).json({msg:err.message})
   fs.unlinkSync(".public/produk/"+result1[0].ft_prdk)
   res.status(200).json({msg:"berhasil hapus data"})
  })
  })
  
}

export const searchProduk=(req,res)=>{
  const {search}=req.query
  if(search.length < 1)
  return res.status(400).json([])
  const sql=`SELECT p.id,p.nma_produk as nama_produk,p.warna,p.berat,p.harga,p.stok,p.deskripsi,p.terjual,p.user_id,p.kategori_id,u.nama,u.email,u.ft_prfl as foto_profil,u.url as url_foto_profil,u.alamat,k.nma_kategori as nama_kategori,u.role as role_penjual,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM produk as p JOIN user as u ON (u.id = p.user_id) JOIN kategori as k ON(k.id = p.kategori_id) LEFT JOIN foto_produk as fp ON (fp.produk_id = p.id) WHERE p.nma_produk LIKE '%${search.replace("-"," ")}%'`
  
  db.query(sql,(err,result)=>{
    if(err){
      return res.status(500).json({msg:err.message})
    }
    if(!result[0]){
      return res.status(404).json({msg:"Tidak dapat menemukan produk"})
    }
    res.status(200).json(result)
  })
}