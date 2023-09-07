import Button from "./Button"

export default function CardBeli({event}){
 
  return (
    <div className="w-screen fixed bottom-0 bg-whitePrimary flex h-16 gap-1 items-center justify-evenly">
      <Button green={false} event= {event}>Tambah Keranjang</Button>
      <Button green={true}>Beli Langsung</Button>
    </div>
    )
}