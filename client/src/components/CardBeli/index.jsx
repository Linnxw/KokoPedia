import Button from "./Button"
export default function CardBeli(){
  return (
    <div className="w-screen fixed bottom-0 bg-whitePrimary flex h-16 gap-1 items-center justify-evenly">
      <Button green={false}>Tambah Keranjang</Button>
      <Button green={true}>Beli Langsung</Button>
    </div>
    )
}