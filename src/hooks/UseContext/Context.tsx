import { createContext, useContext, useState } from "react"

const GlobalContext = createContext<any>(null)


export default function Parent(){
    const [count, setcount] = useState(0)
    
    console.log('Re-render from Parent')

    return (
        <GlobalContext.Provider value={{count,setcount}}>
            <div>
                <p>Parent Count: {count}</p>
                <Child1/>
                <Child2/>
            </div>
        </GlobalContext.Provider>
    )
}


export function Child1(){
    const {count,setcount} = useContext(GlobalContext)
    console.log('Re-render from Child1')
    return (
        <div>
            <p>Child1 count: {count}</p>
            <button onClick={()=>setcount(count+1)}>increment</button>
        </div>
    )
}

export function Child2(){
    const {count,setcount} = useContext(GlobalContext)
    console.log('Re-render from Child2')
    return (
        <div>
            <p>Child2 count: {count}</p>
            <button onClick={()=>setcount(count-1)}>decrement</button>
        </div>
    )
}