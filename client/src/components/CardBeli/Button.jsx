export default function Button({children,green}){
  return <button className={`rounded border ${green ? "bg-greenPrimary text-whitePrimary border border-greenPrimary" :"text-greenPrimary border-greenPrimary bg-whitePrimary"} font-inter font-bold text-[.8rem] text-greenPrimary h-11 px-6`}>{children}</button>
}