import {useReducer} from 'react'

type Props = {}

function reducer(state:any,action:any){

    // if (action.type == 'increment'){
    //     return {count: state.count + 1}
    // }
    // else if(action.type == 'decrement'){
    //     return {count: state.count + 2}
    // }
    // else if(action.type == 'double'){
    //     return {count: state.count * 2}
    // }
    // else{
    //     return {count: state.count}
    // }

    // Also
    switch(action.type){
        case action.type == 'increment':
            return {count: state.count + 1}
        
        case action.type == 'decrement':
            return {count: state.count + 2}
        
        case action.type == 'double':
            return {count: state.count * 2}
        default:
            return {count: state.count}
    }
}



function Reducer({}: Props) {
    const [state,dispatch] = useReducer(reducer,{count: 0})
    return (
        <div>
            <div>
                <button onClick={()=>dispatch({type: 'increment'})}>+</button>
                <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
                <button onClick={()=>dispatch({type: 'double'})}>X2</button>
            </div>
            <div>
                {state.count}
            </div>
        </div>
  )
}

export default Reducer