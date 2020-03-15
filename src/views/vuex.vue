<template>
    <div class="index">
        <h1>{{user.name}}</h1>
        <h1>{{user.age}}</h1>
        <h1>{{number}}</h1>
        <el-button @click="changeData">点击按钮</el-button>
    </div>
</template>
<script>

    export default {
        name: 'Index',
        data() {
            return{
                msg: '12323',
                obj: {}
            }
        },
        computed:{
            user() {
                console.log(this.$store.state);
                return this.$store.state.ModuleA.infoA;
            },
            number() {
                return this.$store.getters.filters;
            }
        },
        methods:{
            changeData() {
                let params = {
                    name: `wanan ${Date.now()}`,
                    age: 27 + `---` + `${Date.now()}`
                }
                this.$store.commit('changeUserInfoA', params)
            }
        },
        created() {
        }
    }
</script>
<style lang="scss">
    .index{
        width: 800px;
        margin: 0 auto;
        height: 100vh;
        background: pink;
    }
</style>