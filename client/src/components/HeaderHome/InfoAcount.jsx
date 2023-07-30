import CardInfo from "./CardInfo"
import gopay from "../../../public/gopay.png"
import reward from "../../../public/reward.png"
export default function InfoAount(){
  return (
  <div className="bg-whitePrimary rounded-lg w-[90%] mx-auto flex overflow-hidden divide-x divide-slate-100 mb-8">
    <CardInfo img={gopay} title={"GoPay"} variant="text-greenPrimary" value="Gopay & Coins" detail="Aktifkan"/>
    <CardInfo img={reward} title={"Reward"} value="Silver" detail="0 Kupon baru"/>
  </div>
  )
}