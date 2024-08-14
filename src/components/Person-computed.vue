<template>
  <div class="person">
    <h1>computed</h1>
    <input type="text" v-model="firstName"> <br>
    <input type="text" v-model="lastName"> <br>
    <!-- 全名：{{firstName}} {{ lastName}} -->
     <p>全名： {{ fullName }}</p>
    <button @click="changeFullName">修改全名</button>
</div>
</template>

<script lang="ts" setup name="personComputed">
import { ref, computed } from 'vue';
const firstName = ref<string>('zhang');
const lastName = ref<string>('san');

// 计算属性 有缓存，普通函数没有缓存，目前fullName是只读的
// let fullName = computed(() => { 
//   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
// })

// 计算属性 有缓存，普通函数没有缓存，目前fullName是可读可写
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
  },
  set(val) {
    console.log(val);
    const [str1, str2] = val.split('-');
    firstName.value = str1;
    lastName.value = str2;
  
  }
})
const changeFullName = () => { 
  fullName.value = 'li-si';
  }
</script>

<style scoped>
.person {
  width: 100%;
  height: 100p;background-color: #fff;
  box-shadow: 5px 5px 5px 5px grey;
  border-radius: 10px;
}
</style>