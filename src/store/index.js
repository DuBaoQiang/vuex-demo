import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ModuleA = {
    state: {
        infoA: {
            name: 'zhangsan',
            age: 123
        },
        array: [1,2,3,4,5]
    },
    mutations: {
        changeUserInfoA(state, payload) {
            state.infoA.name = payload.name;
            state.infoA.age = payload.age;
        }
    },
    actions: {
    },
    modules: {
    },
    getters: {
        filters(state) {
            return state.array.filter(item => item > 3)
        }
    }
};

const ModuleB = {
    state: {
        infoB: {
            name: 'zhangsan',
            age: 123
        }
    },
    mutations: {
        changeUserInfoB(state, payload) {
            state.infoB.name = payload.name;
            state.infoB.age = payload.age;
        }
    },
    actions: {
    },
    modules: {
    }
};

export default new Vuex.Store({
    modules: {
        ModuleA:ModuleA,
        ModuleB:ModuleB
    }
})
