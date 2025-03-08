import { useCallback, useState } from "react"
import Child from "./Child"


function Callback() {
  console.log('RE-rendering from callback')
  const [count,setCount] = useState(0)
  
  const handleClick = useCallback(()=>{
    console.log('You Clicked the Button')
  },[]) // Only Re-creates if the element in dependency array changes. Here it is empty it means it can never change.

  // const handleClick = ()=>{
  //   console.log('You Clicked the Button')
  // } // Only Re-creates if the element in dependency array changes. Here it is empty it means it can never change.

  return (
    <div>
        Count is {count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Child click_func={handleClick}/>
    </div>
  )
}

export default Callback