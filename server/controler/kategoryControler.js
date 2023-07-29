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