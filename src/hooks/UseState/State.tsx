import { useState } from "react"



type Props = {}

const State = (props: Props) => {
    const [count, setcount] = useState(0)
    console.log('re-render state performed')

    function increment(){
        setcount(count+1)
        setcount(count+1)
        setcount(count+1)
        console.log('outside',count)
        setcount((prev)=>{
            console.log('inside before',prev)
            prev = prev+1
            console.log('inside after',prev)
            return prev
        })
    }    

  return (
    <div>
        {count}
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default State