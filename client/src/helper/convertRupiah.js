export const convertRupiah=(data)=>{
    let rupiah=""
    const strRupiah=data?.toString()
    
    let counter=0
    for(let i= strRupiah?.length -1; i >= 0 ;i--){
      rupiah=strRupiah[i] + rupiah
      counter++
      if(counter % 3 === 0 && i !== 0){
        rupiah="." + rupiah
      }
    }
    return rupiah;
  }