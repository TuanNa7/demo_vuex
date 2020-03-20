import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state: {
    tasks: [
      {name: '55 kg', status: 'completed'},
      {name: 'Lương 17M ', status: 'inprogress'},
      {name: 'Học tiếng anh', status: 'todo'},
      {name: 'Lấy bằng', status: 'todo'},
      {name: 'Tiết kiệm 20M', status: 'inprogress'},
      {name: 'Bỏ nói phét', status: 'removed'},
      {name: 'Lấy vợ', status: 'todo'}
    ],
    newTask: ''
  },
  getters,
  mutations,
  actions
})
