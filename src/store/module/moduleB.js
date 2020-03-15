export default {
    namespaced: true,
    state: {
        arr: [123]
    },
    mutations: {
        changeArr(state, data) {
            state.arr = state.arr.concat(data);
        },
        changeTa(context) {
            console.log(context);
            this.commit('changeArr', ['g', 'h']);
        }
    },
    actions: {
        addSomeNumber(context) {
            // console.log(context)
            context.dispatch('changeOring')
            context.commit('changeArr',['a', 'b']);
            context.commit('changeTa')
        },
        changeOring(context) {
            context.commit('changeArr',['e', 'f']);
        }
    },
    getters: {
        // num3(state) {
        //     return state.arr.filter(item => item > 3)
        // }
    },
}