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
import Transition from './hooks/UseTransition/Transition'
import Deferr from './hooks/Usedeferred/deferr'
import Use from './hooks/Use/Use'
import Simple from './hooks/Use/Simple'

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
      {/* <ImperativeHandle/> */}
      {/* <Transition/> */}
      {/* <Deferr/> */}

      {/* both use hook */}
      {/* <Use/> */}
      <Simple/>
    </>
  )
}

export default App
