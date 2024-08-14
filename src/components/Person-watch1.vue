<template>
  <div class="person">
    <h2>watch</h2>
    <!-- <h2>情况1：监视ref基本类型数据</h2>
    <div>当前求和为: {{ sum }}</div>
    <button @click="addSum">sum加1</button> -->

    <!-- <h2>情况2：监视ref对象类型数据</h2>
    <div>姓名: {{ person.name }}</div>
    <div>年龄: {{ person.age }}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button type="button" @click="changePerson">修改人</button> -->

    <h2>情况3：监视reactive对象类型数据</h2>
    <div>姓名: {{ person.name }}</div>
    <div>年龄: {{ person.age }}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button type="button" @click="changePerson">修改人</button>
</div>
</template>

<script lang="ts" setup name="personComputed">
import { ref, watch, reactive } from 'vue';
// 情况一
// let sum = ref(0);
// const addSum = () => {
//   sum.value += 1;
// }
// //监视 基本类型 情况一  sum不用.value
// const stopWatch = watch(sum, (newVal, oldVal) => {
//   console.log('sum的值发生了变化', newVal, oldVal);
//   if (newVal >= 5) {
//     stopWatch(); //停止监听
//   }
// })

// 情况二
// const person = ref({
//   name: '张三',
//   age: 18
// })
// const changeName = () => {
//   person.value.name += '!';
// }
// const changeAge = () => {
//   person.value.age += 1
// }
// const changePerson = () => {
//   person.value = {
//     name: '李四',
//     age: 100
//   }
// }
// //监视对象类型 情况二  监视的是对象的地址值,若想监视对象内部属性的变化,则需要手动开启深度监听
// // 第三个参数是配置对象,deep: true 深度监听
// watch(person, (newVal, oldVal) => {
//   console.log('person的值发生了变化', newVal, oldVal);
// }, {deep: true})

// 情况三
let person = reactive({
  name: '张三',
  age: 18
})
const changeName = () => {
  person.name += '!';
}
const changeAge = () => {
  person.age += 1
}
const changePerson = () => {
  Object.assign(person,{ name: '李四',
  age: 100
  })
}
//监视对象类型 情况三  监视的是对象的数据,默认开启深度监听,不能手动关闭深度监听
watch(person, (newVal, oldVal) => {
  console.log('person的值发生了变化', newVal, oldVal);
})



</script>

<style scoped>
.person {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100p;background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
  border-radius: 10px;
  padding: 20px;
}
</style>