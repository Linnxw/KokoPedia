import Button from "./Button"

export default function CardBeli({keranjang,beli}){
 
  return (
    <div className="w-screen fixed bottom-0 bg-whitePrimary flex h-16 gap-1 items-center justify-evenly">
      <Button green={false} event={keranjang}>Tambah Keranjang</Button>
     <Button green={true} event={beli}>Beli Langsung</Button>
    </div>
    )
}