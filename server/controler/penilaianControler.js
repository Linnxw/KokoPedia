const db = require("../config/Database.js") 
const getPenilaian=(req,res)=>{
  db.query("SELECT * FROM penilaian",(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}
const getPenilaianProduk=(req,res)=>{
   db.query(`SELECT p.id,p.user_id,p.produk_id,p.komen,p.tgl,u.nama,u.email,u.url FROM penilaian as p JOIN user as u ON(u.id = p.user_id) WHERE p.produk_id = ${req.params.id}`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"tidak ada penilaian"})
    res.status(200).json(result)
  })
}

const addPenilaian=(req,res)=>{
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

const editPenilaian=(req,res)=>{
  db.query(`UPDATE penilaian SET komen = '${req.body.komen}' WHERE id = ${req.params.id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
   if(err) return res.status(500).json({msg:err.message})
   res.status(200).json({msg:"berhasil edit penilaian"})
  })
}
const deletePenilaian=(req,res)=>{
  db.query(`DELETE FROM penilaian WHERE id = ${req.params.id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
   if(err) 
   return res.status(500).json({msg:err.message})
   res.status(200).json({msg:"berhasil menghapus penilaian"})
  })
}

module.exports = {deletePenilaian,getPenilaianProduk,getPenilaian,addPenilaian,editPenilaian}