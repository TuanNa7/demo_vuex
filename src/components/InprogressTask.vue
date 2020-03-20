<template>
  <div class="inprogress_tasks col-md-12">
    <div class="title_my_task">Task Inprogress</div>
    <ul class="list_task">
      <li class="task" v-for="task in inprogress">
        {{ task.name }}
        <br />
        <div class="btn-group">
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
      remove(task) {
        store.dispatch('removeTask', task)
      },
      complete(task) {
        store.dispatch('completeTask', task)
      },
      edit(task) {
        store.dispatch('editTask', task)
      }
    },
    computed: {
      inprogress() {
        return store.getters.inprogressTask
      }
    }
  }
</script>
<style>
  .inprogress_tasks {
    border: 1px solid black;
    border-radius: 4px;
    float: left;
  }
</style>