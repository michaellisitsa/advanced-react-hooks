import {useState} from 'react'

function ReducerTask({onChangeTask, onDeleteTask, task}) {
  const [isEdittable, setIsEdittable] = useState(false)

  return (
    <div className="list-item">
      {isEdittable ? (
        <>
          <input
            type="text"
            value={task.text}
            onChange={event =>
              onChangeTask(event, {
                ...task,
                text: event.target.value,
              })
            }
          />
          <button
            onClick={event => {
              setIsEdittable(false)
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p>
            {task.id}:{task.text}
          </p>
          <button onClick={() => setIsEdittable(true)}>Edit</button>
        </>
      )}
      <button onClick={event => onDeleteTask(event, task.id)}>Delete</button>
    </div>
  )
}

export default ReducerTask
