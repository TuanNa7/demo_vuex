<template>
  <div class="completed_tasks col-md-12">
    <div class="title_my_task">Task Complete</div>
    <ul class="list_task">
      <li class="task" v-for="task in completed">
        {{ task.name }}
        <br />
        <div class="btn-group">
          <button type="button" @click="remove(task)" class="btn btn-danger btn-sm">
            <span class="glyphicon glyphicon-remove-circle"></span> Remove
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
      }
    },
    computed: {
      completed() {
        return store.getters.completedTask
      }
    }
  }
</script>
<style>
  .completed_tasks {
    border: 1px solid black;
    border-radius: 4px;
    float: left;
  }
</style>