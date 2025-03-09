import { use } from 'react'

async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const data = fetchData()


function Use() {
    const lists = use(data)
    console.log('use hook')
    return (
        <div>{lists.map((element:any,index:any)=>(
                <div>
                    <span><b>{index+1}. </b></span>
                    <span>{element.title}</span>
                </div>
            ))}</div>
    )
}

export default Use