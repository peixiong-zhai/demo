<template>
  <div class="hello">
   <el-row>
     <el-button-group>
       <el-button type="primary" @click="change(1)">
         显示A
       </el-button>
       <el-button type="primary" @click="change(2)">
         显示B
       </el-button>
       <el-button type="primary" @click="change(3)">
         显示C
       </el-button>
     </el-button-group>
   </el-row>
   <el-row>
     <div v-if="showA">我是A</div>
     <div v-if="showB">我是B</div>
     <div v-if="showC">我是C</div>
   </el-row>
  </div>
</template>

<script>
  export default{
    name:"table",
    data(){
      return{
           showA:false,
           showB:false,
           showC:false,
           selectValue:'',
           
      }
    },
    methods:{
        change(i){
          if(i==1){
            this.showA=true;
            this.showB=false;
            this.showC=false;
          }else if(i==2){
            this.showA=false;
            this.showB=true;
            this.showC=false;
          }else{
            this.showA=false;
            this.showB=false;
            this.showC=true
        }
      },
    }
  }


</script>

<style>
</style>
