<template>
  <div class="todo_task col-md-12">
    <div class="title_my_task">Task todo</div>
    <ul class="list_task">
      <li class="task" v-for="task in tasks">
        {{ task.name }}
        <br />
        <div class="btn-group">
          <button type="button" @click="edit(task)" class="btn btn-primary btn-sm" href="#edit" role="button" data-toggle="modal">
            Edit
          </button>
          <button type="button" @click="inprogress(task)" class="btn btn-info btn-sm">
            Inprogress
          </button>
          <button type="button" @click="complete(task)" class="btn btn-success btn-sm">
            Complete
          </button>
          <button type="button" @click="remove(task)" class="btn btn-danger btn-sm">
            Remove
          </button>
      </div>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../store/store.js'
export default {
  methods: {
    edit(task) {
      store.dispatch('editTask', task)
    },
    inprogress(task) {
      store.dispatch('inprogressTask', task)
    },
    complete(task) {
      store.dispatch('completeTask', task)
    },
    remove(task) {
      store.dispatch('removeTask', task)
    }
  },
  computed: {
    tasks: function() {
      return store.getters.todoTasks
    },
    newTask() {
      return store.getters.newTask
    }
  }
}
</script>
<style>
  .todo_task {
    border: 1px solid black;
    border-radius: 4px;
    float: left;
  }
  .title_my_task{
    height: 38px;
    color: #f4f7f9;
    background-color: #656c7a;
    margin: 0 -15px;
    padding: 7px 15px;
  }
  .list_task{
    margin-top: 15px;
    padding: 5px;
    list-style-type: none;
  }
  .task{
    border: 1px solid black;
    margin: 5px;
    border-radius: 4px;
    padding: 4px;
  }
</style>