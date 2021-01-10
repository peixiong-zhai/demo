<template>
  <div>
      <el-container>
        <el-aside width="200px">
            <div v-for="(item,index) in list" :key="index" @click="getValue(item.Id)">{{item.Label}}</div>
        </el-aside>
        <el-container>
          <el-main>{{this.changeId}}</el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
  export default{
    name:"detail",
    data(){
      return{
          list:[{
            Id:1,
            Label:"活动机制"
          },
          {
            Id:2,
            Label:"奖池信息"
          },
          {
            Id:3,
            Label:"中奖策略"
          },
          {
            Id:4,
            Label:"参与限制"
          },
          ],
          changeId:1,
      }
    },
    methods:{
        getValue(val){
          this.changeId=val;
        }
    }
  }
</script>

<style>
    .el-aside {

      color: #333;
      text-align: center;
      line-height: 50px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

   
</style>
