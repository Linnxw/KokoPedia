export const convertRupiah=(data)=>{
    const rupiah = data.toLocaleString('id-ID',{style:'currency',currency:'IDR'})

    return rupiah;
  }