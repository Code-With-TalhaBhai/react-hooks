import { useEffect,useState } from "react"



type Props = {}

const Effect = (props: Props) => {
    console.log('re-render effect performed')
    const [count, setcount] = useState(0)
    

    useEffect(()=>{
      console.log('inside useEffect')
      return ()=>{ // cleanup function called when re-renders not first time
        console.log('cleanup working')
      }
    },[count])
    

  return (
    <div>
        {count}
        <button onClick={()=>setcount(count+1)}>increment effect</button>
    </div>
  )
}

export default Effect