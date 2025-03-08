import { useRef, useState } from "react"
import Expensive from "./Expensive"



function Memo() {
    console.log('Memo-Component Re-render')
    const [num,setNum] = useState(0)
    const num_ref : any = useRef(0)
  return (
    <div>
        <input ref={num_ref} type="number" />
        <button onClick={()=>setNum(num_ref.current.value)}>Find Square</button>
        <Expensive num={num} />
    </div>
  )
}

export default Memo