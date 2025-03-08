import { useEffect, useRef } from "react"



function Ref() {
    console.log('ref re-render')
    const inputRef : any = useRef(null)
    const check = ()=>{
        console.log(inputRef?.current)
        console.log(inputRef?.current?.value)
        inputRef.current.value = "Talha"
    }

    useEffect(() => {
      console.log('page is rendering')
    }, [])
    

  return (
    <>

    <div>
        <input ref={inputRef} type="text" />
        <button onClick={()=>check()}>Check Re-render</button>
    </div>
    
    </>
  )
}

export default Ref