export const sortTasks = (tasks, sortBy) => {
return [...tasks].sort((a, b) => {
if (sortBy === 'due') return new Date(a.dueDate) - new Date(b.dueDate)
if (sortBy === 'created') return new Date(a.createdAt) - new Date(b.createdAt)
if (sortBy === 'priority') return b.priority - a.priority
return 0
})
}