<template>
    <div>
        <div>A组件</div>
        <el-button @click="send()">点击A子组件得到电话</el-button>
        <div>{{messParent}}</div>
    </div>
</template>
<script>
export default {
    name:"myA",
    data(){
        return {
           tel:"13586567345",
           isremark:""
        }
    },
    props:['remark'],
    methods:{
         send(){
             this.$emit("getTel",this.tel)
         }
        
    },
    computed:{
            messParent(){
             if(this.remark){
               this.isremark=this.remark
             }else{
              this.isremark="这是A自己的值"
             }
             return this.isremark
            
         }
    }
}
</script>