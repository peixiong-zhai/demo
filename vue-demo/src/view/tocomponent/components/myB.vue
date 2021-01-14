<template>
    <div>
        <div>B组件</div>
        <div>{{news}}</div>
        <el-button @click="send()">点击B子组件得到姓名</el-button>
        <el-button @click="sendC()">点击给C组件传值</el-button>
    </div>
</template>
<script>
import bus from '../../../assets/eventBus'
export default {
    name:"myB",
    data(){
        return {
           name:"张小四",
           mark:"这是B组件传过来的值",
           news:""
        }
    },
    methods:{
         send(){
             this.$emit("getName",this.name)
         },
         sendC(){
           bus.$emit("sendByB",this.mark)
         }
    },
    mounted(){
        bus.$on("sendByC",data =>{
            this.news = data
        })
    }
}
</script>