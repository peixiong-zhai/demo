<template>
  <div class="text">
    <h3>地球环境保护日</h3>
    <p :class="{ colorText: colorText }">
      今天是植树节今天是植树节今天是植树节今天是植树节今天是植树节今天是植树节今天是
      植树节今天是植树节今天是植树节今天是植树节开玩笑aaaaaaaaaaaaaaaaaa<b
        >这是加粗字体</b>
    </p>
    <button @click="changeTree()">种树</button>
    <div class="flex">
      <span>这是一</span>
      <span>这是二</span>
      <span>这是三</span>
    </div>
    <input type="text" v-model="inValue" placeholder="请输入需要排序的数组" />
    <button @click="sortArr()">排序</button>
    {{ arr }}
    <div class="storage">
      <button @click="add">存储</button>
      <input type="text" v-model="storage">
      <button @click="put">查看</button>
      <button @click="remove">删除</button>
      {{outStorage}}
    </div>
    <div class="crollBox" ref="offse">{{offset}}</div>
    <div class="imageTab"><img src="../../assets/images/image1.png" alt=""></div>

  </div>
</template>

<script src="./control.js"></script>
<style lang="css" src="./style.css"></style>
