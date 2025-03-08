import { useEffect, useLayoutEffect, useRef, useState } from "react"


function LayoutEffect() {
    console.log('layout')
    const myref : any = useRef(null) 
    const [height,setHeight] = useState(0)

    // Create flickering
    // useEffect(()=>{
    //     console.log('useEffect')
    //     if (myref.current){
    //         setHeight(myref.current.offsetHeight)
    //     }
    // },[])

    // Avoid flickering 
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        if (myref.current){
            setHeight(myref.current.offsetHeight)
        }
        },[])

    return (
        <div ref={myref} style={{ padding: "20px", background: "lightblue" }}>
            <p>
                My height is: {height}
            </p>
        </div>
  )
}

export default LayoutEffect