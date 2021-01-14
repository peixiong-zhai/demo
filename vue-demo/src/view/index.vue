<template>
  <div>
    <el-button @click="goPage('/jisuanqi/123')" type="primary">计算器</el-button>
    <el-button @click="goPage('/table')" type="primary">table切换</el-button>
    <el-button @click="goPage('/inputSearch')" type="primary">带建议的搜索框</el-button>
    <el-button @click="goPage('/detail')" type="primary">detail</el-button>
	<el-button @click="goPage('/addTable')" type="primary">表格的增删改</el-button>
  <el-button @click="goPage('/toComponent')" type="primary">组件传值</el-button>
  </div>



</template>

<script>
  export default{
    name:"index",
    data(){
      return {

      }
    },
    methods:{
      goPage(url){
        this.$router.push(url)
      }
    }
  }
</script>

<style>
</style>
