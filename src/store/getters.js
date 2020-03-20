export default {
  newTask: state => state.newTask,
  todoTasks: state => state.tasks.filter((task) => { return task.status == 'todo' }),
  inprogressTask: state => state.tasks.filter((task) => { return task.status == 'inprogress' }),
  completedTask: state => state.tasks.filter((task) => { return task.status == 'completed' }),
  removedTask: state => state.tasks.filter((task) => { return task.status == 'removed' })
}
