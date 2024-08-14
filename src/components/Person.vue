<template>
  <div class="person">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">增加年龄</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  setup() { // setup函数中的this指向undefined, vue3中已经弱化this了
    console.log('setup');
    // 数据 // 此时的变量不是响应式的
    let name = 'John'; 
    let age = 30;


    // 方法
    const changeName = () => {
      name = 'Tom'; // 这样修改，不生效的
    }
    const changeAge = () => {
      age++;
    }


    // 返回数据和方法,将数据和方法交出去，模板中才可以使用
    return {
      name,
      age,
      changeName,
      changeAge
    }

    // setup返回值也可以是一个渲染函数
    // return function () {
    //   return 'ahhaah'; // 返回一个函数，函数中返回一个对象，对象中包含数据和方法
    // }
  }
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