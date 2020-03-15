import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
export default new Vuex.Store({
    modules:{
        aa: moduleA,
        ModuleB: moduleB
    }
})
