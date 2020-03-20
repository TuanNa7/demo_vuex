<template>
  <div id="add-task">
    <form @submit.prevent="addTask">
      <input class="form-control" :value="newTask" @input="getTask" @change="getTask" placeholder="Thêm nhiệm vụ nào ...!">
      <br>
      <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New Task</button>
    </form>
  </div>
</template>
<script>
  import store from '../store/store.js'

  export default {
    computed: {
      newTask() {
        return store.getters.newTask
      }
    },
    methods: {
      getTask(e) {
        store.dispatch('getTask', e.target.value)
      },
      addTask(e) {
        e.preventDefault();
        store.dispatch('addTask')
        store.dispatch('clearTask')
      }
    }
  }

</script>
