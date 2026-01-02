import TaskItem from './TaskItem'


function TaskList({ tasks, setTasks }) {
if (!tasks.length) return <p className="empty">No tasks found</p>


return tasks.map(task => (
<TaskItem key={task.id} task={task} setTasks={setTasks} />
))
}

export default TaskList;