<template>
    <div>
        <div>C组件</div>
        <el-button @click="send()">点击C子组件得到地址</el-button>
         <el-button @click="sendB()">点击给B组件传值</el-button>
        <div>{{message}}</div>
    </div>
</template>
<script>
import bus from '../../../assets/eventBus'
export default {
    name:"myC",
    data(){
        return {
           address:"上海市虹口区",
           message:"",
           news:"这是C组件传过来的值"
        }
    },
    methods:{
         send(){
             this.$emit("getAddress",this.address)
         },
         sendB(){
             bus.$emit("sendByC",this.news)
         }
    },
    mounted(){
        bus.$on("sendByB",data =>{
            this.message = data
        })
    }
}
</script>