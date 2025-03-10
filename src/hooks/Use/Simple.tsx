import {useEffect,useState} from 'react'




function Simple() {
    const [lists,setLists] = useState([])
    console.log('simple hook')

    useEffect(() => {

      const fetchData = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json() 
        setLists(data)
      }
      fetchData()
    }, [])
    

  return (
    <>
    <div>{lists.map((element:any,index:any)=>(
      <div>
          <span><b>{index+1}. </b></span>
          <span>{element.title}</span>
      </div>
  ))}</div>
  <div>
    Component has mounted
  </div>
  </>
  )
}

export default Simple