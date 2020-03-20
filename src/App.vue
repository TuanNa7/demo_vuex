<template>
  <div id="app" class="container">
    <h4>Quản lý Task 2020</h4>
    <br>
    <div class="row wrapper">
      <div class="col-lg-4 col-xs-12 mb-3">
        <ListTask></ListTask>
      </div>
      <div class="col-lg-3 col-xs-12 mb-3">
        <InprogressTask></InprogressTask>
      </div>
      <div class="col-lg-3 col-xs-12 mb-3">
        <CompletedTask></CompletedTask>
      </div>
      <div class="col-lg-2 col-xs-12 mb-3">
        <RemovedTask></RemovedTask>
      </div>
    </div>
    <AddTask></AddTask>
  </div>
</template>
<script>
import AddTask from './components/AddTask.vue'
import ListTask from './components/ListTask.vue'
import CompletedTask from './components/CompletedTask.vue'
import InprogressTask from './components/InprogressTask.vue'
import RemovedTask from './components/RemovedTask.vue'

export default {
  components: {
    AddTask,
    ListTask,
    CompletedTask,
    InprogressTask,
    RemovedTask
  }

}

</script>
<style>
  .wrapper{
    margin-bottom: 30px;
  }
</style>