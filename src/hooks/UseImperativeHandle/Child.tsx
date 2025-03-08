import { forwardRef, useImperativeHandle } from "react"


const Child = forwardRef<any>((props,ref) =>  {
    console.log('Re-render from Child imperative handle')
    useImperativeHandle(ref,()=>({
      customMethod: ()=>{
        alert('Custom Method Called')
      }
    }))

  return (
    <div>
        <input ref={ref} {...props} />
    </div>
  )
})

export default Child