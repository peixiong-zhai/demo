<template>
  <div class="box">
    <div>{{this.num}}</div>
       <div class="center">
        <el-input class="put" v-model="number"></el-input>
      </div>
    <div v-for="(item,index) in btns" :key="index" class="center">
      <el-button class="btns" v-for="(item2,index2) in item.children" :key="index2" @click="getValue(item2)">{{item2}}</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    name:"jisuanqi",
    data(){
      return{
        btns:[
          {children:['1','2','3','4']},
          {children:['5','6','7','8']},
          {children:['9','0','+','-']},
          {children:['x','/','c','=']},
        ],
        addValue:"",
        option:"",
        addS:"",
        number:0,
        isHasOption:false,
        num:0
      }
    },
    methods:{
      getValue(val){
        switch(val){
          case '+':
          case '-':
          case 'x':
          case '/':
          this.option=val;
          this.isHasOption = true;
          this.addValue="";
          break;
          case '=':
          this.number=this.calc(parseInt(this.addS,10),parseInt(this.addValue,10),this.option)
          this.isHasOption=false;
          this.addValue="";
          this.addS="";
          break;
          case 'c':
          this.addValue="";
          this.addS="";
          this.number=0;
          this.isHasOption=false
          break;
          default:
          if(this.addValue!==''){
            this.addValue=this.addValue+val;
            this.number=parseInt(this.addValue,10)
          }else{
            this.addValue=val
            this.number=parseInt(this.addValue,10)
          }
          if(!this.isHasOption){
            this.addS=this.addValue;
          }
          break

        }
      },
      calc(a,b,c){
        let result = 0;
        switch(c){
          case '+':
         result=a+b;break;
         case '-':
         result=a-b;break;
         case 'x':
         result=a*b;break;
         case '/':
         result=a/b;break;
        }
        return result;
      }
    },
    mounted(){
      this.num=this.$route.params.num
    }
  }
</script>

<style>
  .center {
    text-align: center;
  }
  .center .put {
    width: 229px;
  }
  .center .btns {
    width: 50px;
  }
</style>
