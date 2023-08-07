import {useState,useEffect} from "react"
import {instance} from "../api/instance"

export const useProduk=(url)=>{
  const [data,setData]=useState(null)
  const [msg,setMsg]=useState(null)
  
  useEffect(()=>{
    const getData=async()=>{
      try{
        const response = await instance.get(url)
        
        setData(response.data)
        setMsg(null)
  
      }catch(err){
        console.log(err)
        if(err.response){
          setMsg(err.response.data.msg)
        }
        setData(null)
       
      }
    }
    getData()
  },[url])
  return [data,msg]
}