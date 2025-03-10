import { useEffect, useRef, useState } from "react"



function RefCount() {
    console.log('refCount re-renders')
    const [count,setCount] = useState(0)
    const prevCount = useRef(0)

    useEffect(() => {
    console.log('refCount re-renders inside useEffect count ',count)
      prevCount.current = count
    }, [count])
    // }, [])
    
    return (
        <div>
            <p>Count: {count}</p>
            <p>PrevCount: {prevCount.current}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}

export default RefCount