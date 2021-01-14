<template>
  <div class="parent">
    <div>
      <span>电话：{{ Tel }}</span><br>
      <span>姓名：{{ Name }}</span><br>
      <span>住址：{{ Address }}</span><br>
      <el-button type="primary" @click="sendTo()">点击我给子组件传值</el-button>
    </div>
    <!-- 父组件给子组件传值需要用props[]接收 -->
    <myA :remark="remark" @getTel="changeTel($event)"></myA><br><br>
    <myB @getName="changeName($event)"></myB><br><br>
    <myC @getAddress="changeAddress($event)"></myC><br><br>
  </div>
</template>

<script>
import myA from "./components/myA";
import myB from "./components/myB";
import myC from "./components/myC";
export default {
  name: "toComponent",
  data() {
    return {
      Tel: "",
      Name: "",
      Address: "",
      remark:""
    };
  },
  components: {
    myA,
    myB,
    myC,
  },
  methods: {
    changeTel(e) {
      this.Tel = e;
    },
    changeName(e) {
      this.Name = e;
    },
    changeAddress(e) {
      this.Address = e;
    },
    sendTo(){
        this.remark = "我是父组件传过来的值"
    }
    // changeCountys (val) {
    //   var countModel = this.countrys.find(x => x.Id == val)//针对change事件只能返回index,想要拿到index对应的name
    //   if (countModel) {
    //     this.form.CountyName = countModel.Name
    //   }
    // },
  },
};
</script>

<style>
</style>
