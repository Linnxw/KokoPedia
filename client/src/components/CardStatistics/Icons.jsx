export default function Icons({icon,variant}){
  return <span className={`p-3 flex items-center justify-center rounded-full ${variant} text-whitePrimary text-3xl`}>{icon}</span>
}