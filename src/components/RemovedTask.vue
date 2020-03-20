<template>
  <div class="removed_tasks col-md-12">
    <div class="title_my_task">Task Removed</div>
    <ul class="list_task">
      <li class="task" v-for="task in removed">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
<script>
  import store from '../store/store.js'
  export default {
    computed: {
      removed() {
        return store.getters.removedTask
      }
    }
  }
</script>
<style>
  .removed_tasks {
    border: 1px solid black;
    border-radius: 4px;
    float: left;
  }
</style>