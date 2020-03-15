<template>
    <div class="index">
        <p>原始的array{{array}}</p>
        <p>data中的值{{arrData}}</p>
        <p>Module B {{arr3}}</p>
        <!--<p>大于三的值{{arr3}}</p>-->
        <!--<p>{{$store.getters.num3}}</p>-->
        <el-button @click="changeArr">点击改变</el-button>
    </div>
</template>
<script>
    // import {mapGetters,mapMutations,mapActions,mapState} from 'vuex'
    export default {
        name: 'Index',
        data() {
            return{
                arrData: 123
            }
        },
        computed: {
            array() {
                return this.$store.state.moduleA.arr;
            },
            arr3() {
                return this.$store.state.moduleB.arr;
            },
            // ...mapState({
            //     arr: state => state.arr
            // }),
            // ...mapGetters({
            //     arr3: 'num3'
            // })
        },
        mounted() {
          // console.log(store)
          //   var arrArray = [1,2,3,4,1,3,2];
          //   let hash = {};
          //   let arr = arrArray.reduce((previousValue, currentValue) => {
          //
          //       if (!hash[currentValue]) {
          //           hash[currentValue] = currentValue
          //           previousValue.push(currentValue)
          //       }
          //
          //       // hash[currentValue] ? '':  hash[currentValue] = true && previousValue.push(currentValue);
          //       return previousValue
          //   },[])
          //   console.log(arr);
        },
        methods: {
            // ...mapMutations({
            //     addNumer: 'changeArr'
            // }),
            // ...mapActions({
            //     add: 'addSomeNumber'
            // }),
            changeArr() {
                // this.addNumer([8,9]);
                // this.add()
                console.log(this.$store);
                this.$store.commit('moduleA/changeArr', [6,7]);
                // 1. 如果你直接在这里调用接口
                // 2.通过dispatch调用接口
                // this.$http.get().then(res => {
                //     this.$store.commit();
                // })

                // this.$store.dispatch('addSomeNumber')
            }
        },
        watch: {

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