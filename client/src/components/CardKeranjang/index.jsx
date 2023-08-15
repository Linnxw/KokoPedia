import CardToko from "./CardToko"
export default function index({data, refresh}){
  return (
    <div>
      <CardToko data={data} refresh={refresh}/>
    </div>
    )
}