import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
// import axios from 'axios'

// let api = axios.create({
//   baseURL: process.env.BASE_URL
// })
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isGenerating: false,
    response: null,
    fieldErrors: {},
    generalErrors: [],
    isLoggedin: false
  },
  actions,
  getters,
  mutations,
  plugins: [createdPersistedState()]
})
