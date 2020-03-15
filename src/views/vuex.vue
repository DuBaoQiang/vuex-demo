<template>
    <div class="index">
        <h1>{{userInfo.name}}</h1>
        <h1>{{userInfo.age}}</h1>
        <el-button @click="changeData">点击按钮</el-button>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
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
                return this.$store.state.info
            },
            ...mapState({
                userInfo: state => state.info
            })
        },
        methods:{
            changeData() {
                let params = {
                    name: 'wanan',
                    age: 27
                }
                this.$store.commit('changeUserInfo', params)
            }
        },
        watch: {
            obj: {
                deep: true,
                immediate: true,
                handler(newValue, oldValue) {

                }
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