import {  useState, useTransition } from "react"
import {data} from './Data.ts'


function Transition() {
    const [isPending,startTransition] = useTransition()
    const [query,setQuery] = useState('')
    const [filterList,setFilterList] = useState(data)
    


    const handleSearch = (e:any)=>{
      setQuery(e.target.value)

      startTransition(()=>{
        setFilterList(data.filter((item)=>(item.name.toLowerCase().includes(e.target.value.toLowerCase()))))
      })
    }

  return (
    <div>
        <input 
        type="text"
        value={query}
        onChange={handleSearch}
        />

        <div>
          {
            isPending ?
             <p>Loading...</p> : 
             filterList.map((element,index)=>(
                <div key={index} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <b>{index+1}. </b>
                <p>{element.name}</p>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default Transition