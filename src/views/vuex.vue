<template>
    <div class="index">
        <h1>{{user.name}}</h1>
        <h1>{{user.age}}</h1>
        <el-button @click="changeData">点击按钮</el-button>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        data() {
            return{
                msg: '12323'
            }
        },
        computed:{
            user() {
                return this.$store.state.info
            }
        },
        methods:{
            changeData() {
                let params = {
                    name: 'wanan',
                    age: 27
                }
                this.$store.commit('changeUserInfo', params)
            }
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