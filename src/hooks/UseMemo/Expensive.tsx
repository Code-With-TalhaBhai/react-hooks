import { useMemo } from "react"



function Expensive({num}:{num:number}) {
    console.log('Expensive function re-rendered')
    const squared = useMemo(()=>{
        return num * num
    },[num])
  return (
    <div>
        Squared {squared}
    </div>
  )
}

export default Expensive