<template>
  <div class="person">
    <h2>watch</h2>

    <!-- <h2>情况4：监视reactive或ref对象属性中的某一个值</h2>
    <div>姓名: {{ person.name }}</div>
    <div>年龄: {{ person.age }}</div>
    <div>汽车: {{ person.car.c1 }}, {{ person.car.c2 }}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button type="button" @click="changeC1">修改第一台车</button>
    <button type="button" @click="changeC2">修改第二台车</button>
    <button type="button" @click="changeCar">修改汽车</button> -->


    <h2>情况5：监视上述中的多个数据</h2>
    <div>姓名: {{ person.name }}</div>
    <div>年龄: {{ person.age }}</div>
    <div>汽车: {{ person.car.c1 }}, {{ person.car.c2 }}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button type="button" @click="changeC1">修改第一台车</button>
    <button type="button" @click="changeC2">修改第二台车</button>
    <button type="button" @click="changeCar">修改汽车</button>
</div>
</template>

<script lang="ts" setup name="personComputed">
import { ref, watch, reactive } from 'vue';
// let person = reactive({
//   name: '张三',
//   age: 18,
//   car: {
//     c1: '奔驰',
//     c2: '宝马'
//   }
// })
// const changeName = () => {
//   person.name += '-';
// }
// const changeAge = () => {
//   person.age += 2
// }
// const changeC1 = () => {
//   person.car.c1 = '奥迪'
// }
// const changeC2 = () => {
//   person.car.c2 = '特斯拉'
// }
// const changeCar = () => {
//   person.car = {
//     c1: '法拉利',
//     c2: '兰博基尼'
//   }
// }
// // 情况4：监视reactive或ref对象属性中的某一个值,且该属性是基本类型,需要写成函数式
// // watch(() => person.name, (newValue, oldValue) => {
// //   console.log('person变化了', newValue, oldValue)
// // })

// // 情况4：监视reactive或ref对象属性中的某一个值,且该属性是对象类型,可以直接写,也可以写成函数式, 推荐写函数式
// watch(() => person.car, (newValue, oldValue) => {
//   console.log('person.car变化了', newValue, oldValue)
// }, {deep: true})


// 情况5
let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})
const changeName = () => {
  person.name += '-';
}
const changeAge = () => {
  person.age += 2
}
const changeC1 = () => {
  person.car.c1 = '奥迪'
}
const changeC2 = () => {
  person.car.c2 = '特斯拉'
}
const changeCar = () => {
  person.car = {
    c1: '法拉利',
    c2: '兰博基尼'
  }
}

// 情况5：监视上述多个数据
watch([() => person.car.c1, ()=> person.name], (newValue, oldValue) => {
  console.log('person.car变化了', newValue, oldValue)
}, {deep: true})
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