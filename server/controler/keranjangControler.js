const db = require("../config/Database.js") 

const getMyKeranjang=(req,res)=>{
  const sql=`SELECT k.id as keranjang_id,k.user_id,u.nama,u.url as url_foto_profile,u.alamat,k.produk_id,k.jumlah,p.nma_produk,p.stok,p.harga,fp.ft_prdk as foto_produk,fp.url as url_foto_produk FROM keranjang as k LEFT JOIN produk as p ON(p.id = k.produk_id) LEFT JOIN foto_produk as fp ON(fp.produk_id = p.id) LEFT JOIN user as u ON(u.id = p.user_id) WHERE k.user_id = (SELECT id FROM user WHERE email = '${req.email}')`
  
  db.query(sql,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}


const getMyKeranjangById=(req,res)=>{
   const sql=`SELECT k.id as keranjang_id,k.user_id,k.produk_id,k.jumlah,p.nma_produk,p.stok FROM keranjang as k JOIN produk as p ON(p.id = k.user_id) WHERE k.user_id = (SELECT id FROM user WHERE email = '${req.email}') AND k.id = ${req.params.id}`
  
  db.query(sql,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}


 const addKeranjang=(req,res)=>{
  const {id,jumlah}=req.query
  db.query(`SELECT * FROM keranjang WHERE produk_id = ${id}  AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
    if(err) return res.status(500).json({msg:err})
    if(!result[0]){
     const sql=`INSERT INTO keranjang (user_id,produk_id,jumlah) VALUES ((SELECT id FROM user WHERE email = '${req.email}'),${parseInt(id)},${parseInt(jumlah)})`
     db.query(sql,(err,result)=>{
      if(err) return res.status(500).json({msg:err.message})
      res.status(200).json({msg:"berhasil,telah ditambahkan ke keranjang"})
     })
    }else{
      db.query(`UPDATE keranjang SET jumlah = jumlah + ${parseInt(jumlah)} WHERE id = ${result[0].id} AND user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
       if(err) return res.status(500).json({msg:err.message})
       res.status(200).json({msg:"berhasil,telah menambahkan keranjang"})
      })
    }
  })
}


const deleteMyKeranjang=(req,res)=>{
  db.query(`SELECT * FROM keranjang WHERE id = ${req.params.id}`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.staatus(402).json({msg:"keranjang tidak ditemukan"})
    db.query(`DELETE FROM keranjang WHERE id = ${result[0].id}`,(err,result)=>{
     if(err) return res.status(500).json({msg:err.message})
     res.status(200).json({msg:"berhasil menhapus produk dari kernjang"})
    })
  })
}

module.exports = {deleteMyKeranjang,getMyKeranjangById,getMyKeranjang,addKeranjang}