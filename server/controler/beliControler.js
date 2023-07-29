import db from "../config/Database.js"
import moment from "moment"
export const getRiwayatBeli=(req,res)=>{
  db.query("SELECT id,nma_produk,ttl_harga,jumlah,url FROM riwayat_bl",(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}
export const getDetailRiwayatBeli=(req,res)=>{
  db.query("SELECT * FROM riwayat_bl",(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    const newTgl=moment(result[0].tgl).format("YYYY-MM_DD HH:mm:ss")
    const data={...result[0],tgl:newTgl}
    res.status(200).json(data)
  })
}
export const getRiwayatJual=(req,res)=>{
  db.query("SELECT id,nma_produk,ttl_harga as ttl_jual,jumlah,url FROM riwayat_jl",(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    const newTgl=moment(result[0].tgl).format("YYYY-MM_DD HH:mm:ss")
   
    res.status(200).json(result)
  })
}
export const getDetailRiwayatJual=(req,res)=>{
  db.query("SELECT id,id_produk,nma_produk,tgl,ttl_harga as ttl_jual,jumlah,url,nma_penjual,id_penjual,nma_pembeli,id_pembeli,user_id FROM riwayat_jl",(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    const newTgl=moment(result[0].tgl).format("YYYY-MM_DD HH:mm:ss")
    const data={...result[0],tgl:newTgl}
    res.status(200).json(data)
  })
}

export const getMyRiwayatBeli=(req,res)=>{
  db.query(`SELECT id,nma_produk,ttl_harga,jumlah,url FROM riwayat_bl WHERE user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}
export const getMyRiwayatJual=(req,res)=>{
  db.query(`SELECT id,nma_produk,ttl_harga as ttl_jual,jumlah,url FROM riwayat_jl WHERE user_id = (SELECT id FROM user WHERE email = '${req.email}')`,(err,result)=>{
    if(err) return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}

export const beliProduk=(req,res)=>{
const {jumlah}=req.body
let dataPembeli;
  db.query(`SELECT * FROM user WHERE email = '${req.email}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    dataPembeli=result[0]
  })
  db.query(`SELECT p.id,p.nma_produk,p.harga,fp.url as url_produk,u.id as id_penjual,u.nama as nama_penjual FROM produk as p JOIN user as u ON(u.id = p.user_id) JOIN foto_produk as fp ON(fp.produk_id = p.id) WHERE p.id = ${req.params.id}`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    if(!result[0])
    return res.status(404).json({msg:"produk tidak ditemukan"})
    if(result[0].id_penjual === dataPembeli.id)
    return res.status(400).json({msg:"anda tidak dapat membeli barang anda sendiri"})
    const now=new Date()
    const option={timeZone:"Asia/Jakarta"}
    const date=now.toISOString().slice(0,10)
    const hours=now.toLocaleString('en-GB',option).slice(12,20)
    const tgl=date + " " + hours
    
    db.beginTransaction((err)=>{
      db.query(`UPDATE produk SET stok = stok - ${jumlah},terjual = terjual + ${jumlah} WHERE id = ${req.params.id}`,(err,result)=>{
        if(err){
          db.rollback(()=>{
            console.log("eror update stok + terjual")
          })
          console.log(err.message)
          return ;
        }
      })
      db.query(`INSERT INTO riwayat_bl (tgl,ttl_harga,jumlah,url,id_produk,nma_produk,nma_penjual,id_penjual,id_pembeli,user_id,nma_pembeli) VALUES('${tgl}',${result[0].harga * jumlah},${jumlah},'${result[0].url_produk}',${result[0].id},'${result[0].nma_produk}','${result[0].nama_penjual}',${result[0].id_penjual},${dataPembeli.id},${dataPembeli.id},'${dataPembeli.nama}')`,(err,result)=>{
        if(err){
          db.rollback(()=>{
            console.log("err riwayat bl",err.message)
          })
          return ;
        }
      })
      db.query(`INSERT INTO riwayat_jl (tgl,ttl_harga,jumlah,url,id_produk,nma_produk,nma_pembeli,id_penjual,id_pembeli,user_id,nma_penjual) VALUES('${tgl}',${result[0].harga * jumlah},${jumlah},'${result[0].url_produk}',${result[0].id},'${result[0].nma_produk}','${dataPembeli.nama}',${result[0].id_penjual},${dataPembeli.id},${result[0].id_penjual},'${result[0].nama_penjual}')`,(err,result)=>{
              if(err){
                db.rollback(()=>{
                  console.log("err rwyt jl",err.message)
                })
                return ;
              }
            db.commit()
            res.status(200).json({msg:"berhasil membeli produk"})
            })
    })
  })
}