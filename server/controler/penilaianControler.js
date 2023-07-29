import db from "../config/Database.js"

export const getPenilaian=(req,res)=>{
  db.query("SELECT * FROM penilaian",(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}

export const getPenilaianProduk=(req,res)=>{
   db.query(`SELECT * FROM penilaian WHERE produk_id = ${req.params.id}`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"tidak ada penilaian"})
    res.status(200).json(result)
  })
}

export const addPenilaian=(req,res)=>{
  db.query(`SELECT * FROM riwayat_bl WHERE id_produk = ${req.params.id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{

    const now=new Date()
    const option={timeZone:"Asia/Jakarta"}
    const date=now.toISOString().slice(0,10)
    const hours=now.toLocaleString('en-GB',option).slice(12,20)
    const tgl=date + " " + hours
    console.log(tgl)
    if(!result[0]) return res.status(402).json({msg:"tidak dapat memberi penilaian karna ada belum pernah membeli produk ini"})
   db.query(`INSERT INTO penilaian (user_id,produk_id,komen,tgl) VALUES(${result[0].user_id},${req.params.id},'${req.body.komen}','${tgl}')`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json({msg:"penilaian anda telah terkirim"})
   })
  })
}

export const editPenilaian=(req,res)=>{
  db.query(`UPDATE penilaian SET komen = '${req.body.komen}' WHERE id = ${req.params.id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
   if(err) return res.status(500).json({msg:err.message})
   res.status(200).json({msg:"berhasil edit penilaian"})
  })
}
export const deletePenilaian=(req,res)=>{
  db.query(`DELETE FROM penilaian WHERE id = ${req.params.id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
   if(err) 
   return res.status(500).json({msg:err.message})
   res.status(200).json({msg:"berhasil menghapus penilaian"})
  })
}