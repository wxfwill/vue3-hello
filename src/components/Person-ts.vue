<template>
  <div class="person">
    <h3>ts类型</h3>
    <ul>
      <li v-for="item in list" :key="item.name">
        {{item.name}}-{{item.age}}
      </li>
    </ul>
    <!-- <div>a的值:{{ a }}</div>  -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from 'vue';
import type { personInter, persons} from '@/types';
// let personList = reactive<Array<personInter>>([
//   {name: '张三', age: 18},
//   {name: '李四', age: 100},
//   {name: '王五', age: 20},
// ])

// let personList = reactive<persons>([
//   {name: '张三', age: 18},
//   {name: '李四', age: 100},
//   {name: '王五', age: 20},
// ])

// 接受prop a，同时保存把a的值保存在x中
// let x = defineProps(['a'])
// console.log(x.a);

defineProps(['list'])

</script>

<style scoped>
.person {
  width: 100%;
  padding: 10px;
  background-color: hotpink;
  box-shadow: 5px 5px 5px 5px grey;
}
</style>