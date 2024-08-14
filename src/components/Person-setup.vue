<template>
  <div class="person">
    <h1>setup模式</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">增加年龄</button>
  </div>
</template>

<!-- 可以用这个插件vite-plugin-vue-setup-extend 代替 组件的别名  -->
<!-- <script lang="ts">
export default {
  name: 'PersonSetup',
}
</script> -->

<script lang="ts" setup name="PersonSetup">
// ref定义基本类型的响应式数据
// reactive定义复杂数据(对象)类型的响应式数据
import { ref, reactive } from 'vue';

  let name = ref('John22'); 
  let age = ref(100);

  // 方法
  const changeName = () => {
    name.value = 'Tom'; // 这样修改，不生效的
  }
  const changeAge = () => {
    age.value += 1;
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