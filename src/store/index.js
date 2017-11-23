/**
 * Created by Administrator on 2017/11/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const getters = {
//   count: state => { state.count += 100 }
// }

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
