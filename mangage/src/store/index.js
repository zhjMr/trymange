import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import getters from './getters'
import Tags from './modules/Tags'
import user from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  modules: {
    menu,
    Tags,
    user
  }
})
