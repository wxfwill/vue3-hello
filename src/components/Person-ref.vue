<template>
  <div class="person">
    <h1>toRef</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}---{{ nl }}</p>
    <button @click="changeName">修改年龄</button>
    <button @click="changeAge">修改姓名</button>
</div>
</template>

<script lang="ts" setup name="PersonRef">
import { reactive, toRefs, toRef } from 'vue';
let person = reactive({
  name: '张三',
  age: 18
})

// toRefs 将响应式对象中的属性变成响应式数据，并且返回一个对象
// toRefs 可以同时响应式里面的所有属性
let { name, age } = toRefs(person);

// toRef 将响应式对象中的某个属性变成响应式数据，并且返回一个对象
// toRef 只能响应式里面的一个属性
let nl = toRef(person, 'age');


const changeName = () => {
  name.value += '~';
}
const changeAge = () => {
  age.value += 1;
}

</script>

<style scoped>
.person {
  width: 100%;
  height: 100p;background-color: hotpink;
  box-shadow: 5px 5px 5px 5px grey;
}
</style>