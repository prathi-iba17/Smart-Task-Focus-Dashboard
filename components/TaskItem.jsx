import { useState } from 'react'
import EditTaskModal from './TaskEditing'

function TaskItem({ task, setTasks }) {
  const [editOpen, setEditOpen] = useState(false)

  const toggleStatus = () => {
    setTasks(tasks =>
      tasks.map(t =>
        t.id === task.id
          ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' }
          : t
      )
    )
  }

  const remove = () => {
    setTasks(tasks => tasks.filter(t => t.id !== task.id))
  }

  return (
    <>
      <div className={`task ${task.status}`}>
        <div className="task-left">
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className={`badge ${task.priority}`}>{task.priority}</span>
            {task.dueDate && <small>Due Date :  {task.dueDate}</small>}
          </div>

          <small>
            Created: {new Date(task.createdAt).toLocaleString()}
          </small>
        </div>

        <div className="task-actions">
          <button onClick={() => setEditOpen(true)}>Edit</button>
          <button onClick={toggleStatus}>Mark as Done</button>
          <button onClick={remove}>Remove</button>
        </div>
      </div>

      {editOpen && (
        <EditTaskModal
          task={task}
          setTasks={setTasks}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  )
}
export default TaskItem;
