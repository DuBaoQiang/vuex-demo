import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import moduleA from './module/moduleA'
// import moduleB from './module/moduleB'


const modulesFiles = require.context('./module', true, /\.js$/);
console.log(modulesFiles);
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    modules[moduleName] = modulesFiles(modulePath).default
    return modules
}, {})
console.log(modules);
export default new Vuex.Store({
    modules
})
