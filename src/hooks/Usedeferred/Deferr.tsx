import { useDeferredValue, useState } from "react"
import SearchResults from "./Child"


function Deferr() {
    const [query,setQuery] = useState<string>('')
    const deferredQuery = useDeferredValue(query)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }

  return (
    <div>
        <input value={query} type="text" onChange={handleChange} />
        <SearchResults searchQuery={deferredQuery}/>
    </div>
  )
}

export default Deferr   