import { useState } from 'react'
import State from './hooks/UseState/State'
import './App.css'
import Effect from './hooks/UseEffect/Effect'
import Parent from './hooks/UseContext/Context'
import Reducer from './hooks/UseReducer/Reducer'
import Ref from './hooks/UseRef/Ref'
import RefCount from './hooks/UseRef/RefCount'
import LayoutEffect from './hooks/UseLayoutEffect/LayoutEffect'
import Memo from './hooks/UseMemo/Memo'
import Callback from './hooks/UseCallback/Callback'
import ImperativeHandle from './hooks/UseImperativeHandle/ImperativeHandle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Parent/> */}
      {/* <Reducer/> */}

      {/* Both Ref Concept */}
      {/* <Ref/> */}
      {/* <RefCount/> */}

      {/* <LayoutEffect/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      <ImperativeHandle/>
    </>
  )
}

export default App
