import {useReducer, useState} from 'react'
import countReducer from './countReducer'
import countReplicateSetState from './countReplicateSetState'

const initialState = {count: 0}

function Counter() {
  const [countState, dispatch] = useReducer(countReducer, initialState)
  const [countStateReplic, setState] = useReducer(
    countReplicateSetState,
    initialState,
  )
  const [stepCount, setStepCount] = useState(0)
  const [stepCountReplic, setStepCountReplic] = useState(0)

  return (
    <div>
      <h1>counter component</h1>
      <div>
        <p>{countState.count}</p>
        <button onClick={() => dispatch({type: 'add'})}>Increment</button>
        <input
          type="number"
          onChange={event => setStepCount(parseInt(event.target.value))}
          placeholder="Enter Step value..."
        />
        <button onClick={() => dispatch({type: 'step', count: stepCount})}>
          Step
        </button>
      </div>
      <div>
        <p style={{color: 'red'}}>Replicated State: {countStateReplic.count}</p>
        <input
          type="number"
          onChange={event => setStepCountReplic(parseInt(event.target.value))}
          placeholder="Enter Replicated Step value..."
        />
        <button
          onClick={() =>
            setState({count: countStateReplic.count + stepCountReplic})
          }
        >
          Step
        </button>
      </div>
    </div>
  )
}

export default Counter
