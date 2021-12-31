import {useReducer, useState} from 'react'
import countReducer from './countReducer'
import countReplicateSetState from './countReplicateSetState'

const initialState = {count: 0}

function Counter() {
  // Reducer state
  const [state1, dispatch] = useReducer(countReducer, initialState)
  const [state2, setState2] = useReducer(countReplicateSetState, initialState)

  //local state
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)

  return (
    <div>
      <h1>counter component</h1>
      <div>
        <p>{state1.count}</p>
        <button onClick={() => dispatch({type: 'add'})}>Increment</button>
        <input
          type="number"
          onChange={event => setInput1(parseInt(event.target.value))}
          placeholder="Enter Step value..."
        />
        <button onClick={() => dispatch({type: 'step', count: input1})}>
          Step
        </button>
      </div>
      <div>
        <p style={{color: 'red'}}>Replicated State: {state2.count}</p>
        <input
          type="number"
          onChange={event => setInput2(parseInt(event.target.value))}
          placeholder="Enter Replicated Step value..."
        />
        <button
          onClick={() =>
            setState2(currentState => ({count: currentState.count + input2}))
          }
        >
          Step
        </button>
      </div>
    </div>
  )
}

export default Counter
