import { memo } from "react"



function Child({click_func}:any) {
    console.log('Re-rendering from Callback Child')
  return (
        <button onClick={click_func}>Click Me From Child</button>
  )
}

export default memo(Child)