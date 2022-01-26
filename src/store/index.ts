import { createStore } from 'vuex'
import input from './modules/input'
import getters from './getters/index'

export default createStore({
  modules: {
    input
  },
  getters
})
