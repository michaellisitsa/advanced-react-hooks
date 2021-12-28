import {useReducer, useState} from 'react'
import {taskReducer} from './taskReducer'

const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
]

function ReducerComponent(props) {
  const [input, setInput] = useState('')
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  function nextId(tasks) {
    return Math.max(...tasks.map(task => parseFloat(task.id))) + 1
  }

  function handleAddTask(event, text) {
    event.preventDefault()
    dispatch(
      // action object
      {
        type: 'added',
        id: nextId(tasks),
        text: text,
      },
    )
  }

  // function handleChangeTask(task) {
  //     dispatch({
  //       type: 'changed',
  //       task: task
  //     });
  //   }

  function handleDeleteTask(event, taskId) {
    event.preventDefault()
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <div>
      <h1>First useReducer</h1>
      <form>
        <input
          type="text"
          placeholder="Enter text"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button onClick={event => handleAddTask(event, input)}>Add Text</button>
      </form>
      {tasks.map(task => (
        <div className="list-item">
          <p key={task.id}>
            {task.id}:{task.text}
          </p>
          <button onClick={event => handleDeleteTask(event, task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ReducerComponent
