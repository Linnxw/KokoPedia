import db from "../config/Database.js"

export const getKategori=(req,res)=>{
  db.query("SELECT * FROM kategori",(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}

export const getKategoriById=(req,res)=>{
  db.query(`SELECT * FROM kategori WHERE id = ${req.params.id}`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"kategori not found"})
    res.status(200).json(result)
  })
  
}
export const createKategori=(req,res)=>{
  db.query(`SELECT * FROM kategori WHERE nma_kategori LIKE '%${req.body.namaKategori}%'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(result[0])
    return res.status(402).json({msg:"kategory telah tersedia"})
    db.query(`INSERT INTO kategori (nma_kategori) VALUES('${req.body.namaKategori}')`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      res.status(201).json({msg:"succes add kategori"})
    })
  })
}

export const deleteKategori=(req,res)=>{
  db.query(`SELECT * FROM kategori WHERE id = ${req.params.id}`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"no found kategori"})
    db.query(`DELETE FROM kategori WHERE id = ${result[0].id}`,(err,result)=>{
      if(err)
      return res.status(500).json({msg:err.message})
      res.status(200).json({msg:"succes delete kategori"})
    })
  })
}

export const getProdukByKategory=(req,res)=>{
  
  db.query(`SELECT p.id,p.nma_produk as nama_produk,p.warna,p.berat,p.harga,p.stok,p.deskripsi,p.terjual,p.user_id,p.kategori_id,u.nama,u.email,u.ft_prfl as foto_profil,u.url as url_foto_profil,k.nma_kategori as nama_kategori,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM produk as p JOIN user as u ON (u.id = p.user_id) JOIN kategori as k ON(k.id = p.kategori_id) LEFT JOIN foto_produk as fp ON (fp.produk_id = p.id) WHERE k.nma_kategori = '${req.query.kategory}' ORDER BY p.terjual DESC LIMIT 10`,(err,result)=>{
    if(err){
    return res.status(500).json({msg:err?.message})
    }
    if(!result[0]){
      return res.status(404).json({msg:"Tidak ada produk dengan kategori terkait"})
    }
    res.status(200).json(result)
  })
}