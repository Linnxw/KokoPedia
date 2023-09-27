import db from "../config/Database.js"

export const getFollowUser=(req,res)=>{
  db.query(`SELECT id FROM user WHERE email = '${req.email}'`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    db.query(`SELECT * FROM follows as f JOIN user as u ON (f.user_id = u.id) WHERE f.user_id = ${result[0].id}`,(err,result)=>{
     if(err)
     return res.status(500).json({msg:err.message})
     res.status(200).json(result)
    })
  })
}

export const getFollowUserById=(req,res)=>{
  db.query(`SELECT * FROM follows WHERE user_id = ${req.params.id}`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}
export const getCountFollow=(req,res)=>{
  db.query(`SELECT COUNT(follower_id) as follower,COUNT(following_id) as following FROM follows WHERE user_id = ${req.query.userId}`,(err,result)=>{
    if(err)
    return res.status(500).json({msg:err.message})
    res.status(200).json(result)
  })
}

export const follow=(req,res)=>{
const {following}=req.query
  db.query(`SELECT * FROM user WHERE email = '${req.email}'`,(err,result1)=>{
    db.query(`SELECT COUNT(follower_id) as follower FROM follows WHERE user_id = ${following} AND follower_id = ${result1[0].id}`,(err,result2)=>{
      if(err){
        console.log(err)
        res.status(500).json({msg:err.message})
      }
      if(result2[0].follower > 0){
       db.query(`DELETE FROM follows WHERE following_id = ${following} OR follower_id = ${result1[0].id}`,(err,result)=>{
         if(err)
         return res.status(500).json({msg:err.messaage})
         res.sendStatus(200)
       })
      }else{
        db.beginTransaction((err)=>{
          //add follow tujuan
          db.query(`INSERT INTO follows (follower_id,user_id) VALUES(${result1[0].id},${following})`,(err,result)=>{
            if(err){
              db.rollback(()=>{
                console.log("error tambah folower tujuan")
              })
              return ;
            }
            }
           )
          db.query(`INSERT INTO follows (following_id,user_id) VALUES(${following},${result1[0].id})`,(err,result)=>{
            if(err){
              db.rollback(()=>{
                console.log("error tambah folower tujuan")
              })
              return ;
            }
            }
           )
           
           db.commit()
           res.sendStatus(200)
        })
      }
    })
  })
}

