import CardToko from "./CardToko"
export default function index({beli,data, refresh}){
  return (
    <div>
      <CardToko data={data} beli={beli} refresh={refresh}/>
    </div>
    )
}