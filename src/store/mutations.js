export default {
  getTask(state, task) {
    state.newTask = task
  },
  addTask(state){
    state.tasks.push({
      name: state.newTask,
      status: 'todo'
    })
  },
  editTask(state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)
    state.tasks = tasks
    state.newTask = task.name
  },
  removeTask(state, task) {
    task.status = 'removed'
    // var tasks = state.tasks
    // tasks.splice(tasks.indexOf(task), 1)
  },
  completeTask(state, task) {
    task.status = 'completed'
  },
  clearTask(state) {
    state.newTask = ''
    console.log('state la: ', state)
  },
  inprogressTask(state, task) {
    task.status = 'inprogress'
  }
}