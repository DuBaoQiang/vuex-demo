import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
        name: 'zhangsan',
        age: 123
    }
  },
  mutations: {
      changeUserInfo(state, payload) {
        state.info.name = payload.name;
        state.info.age = payload.age;
      }
  },
  actions: {
  },
  modules: {
  }
})
