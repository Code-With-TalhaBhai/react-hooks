import { useRef } from "react"
import Child from "./Child"


function ImperativeHandle() {
    console.log('Re-render from imperative handle')

    const imperativeRef = useRef<any>(null)

  return (
    <div>
        <Child ref={imperativeRef}/>
        <button onClick={()=>imperativeRef?.current?.customMethod()}>Focus Input</button>
    </div>
  )
}

export default ImperativeHandle