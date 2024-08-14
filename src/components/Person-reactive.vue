<template>
  <div class="person">
    <h1>car</h1>
    <p>一辆{{car.brand}},价值{{ car.price }}万</p>
    <button @click="changePrice">修改汽车的价格</button>
    <p>游戏信息：</p>
    <div v-for="item in games" :key="item.price">
      {{ item.name }}:{{ item.price }}
    </div>
    <button @click="changeOneName">修改第一个游戏名字</button>
  </div>
</template>

<!-- 可以用这个插件vite-plugin-vue-setup-extend 代替 组件的别名  -->
<!-- <script lang="ts">
export default {
  name: 'PersonSetup',
}
</script> -->

<script lang="ts" setup name="PersonReactive">
// ref 可以定义基本类型和对象类型的响应式数据
// reactive 只能定义复杂数据(对象)类型的响应式数据
import { ref, reactive } from 'vue';

let car = reactive({ brand: '奔驰', price: 100 })
let games = ref([
  { name: '英雄联盟', price: 10 },
  { name: '绝地求生', price: 20 },
  { name: '王者荣耀', price: 30 },
])
let sum = ref(0);

const changePrice = () => {
  car.price += 10;
}

const changeOneName = () => {
  games.value[0].name = '英雄联盟2';
}

const changeSum = () => {
  sum.value += 1;
}
</script>

<style scoped>
.person {
  width: 100%;
  height: 100px;
  background-color: hotpink;
  box-shadow: 5px 5px 5px 5px grey;
}
</style>