
<template>
  <!-- <div class="title">hello vue3 66</div> -->
  <!-- <Person></Person>
  <PersonSetup></PersonSetup> -->
  <!-- <PersonReactive></PersonReactive> -->
   <!-- <PersonRef></PersonRef> -->
    <!-- <PersonComputed></PersonComputed> -->
    <!-- <PersonWatch1></PersonWatch1> -->
     <!-- <PersonWatch2></PersonWatch2> -->
     <!-- <PersonWatchEffect ref="children"></PersonWatchEffect>
     <button type="button" @click="showChildren">App展示ref</button> -->
     <PersonTs a="哈哈" :list="personList"></PersonTs>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import PersonSetup from './components/Person-setup.vue';
import PersonReactive from './components/Person-reactive.vue';
import PersonRef from './components/Person-ref.vue';
import PersonComputed from './components/Person-computed.vue';
import PersonWatch1 from './components/Person-watch1.vue';
import PersonWatch2 from './components/Person-watch2.vue';
import PersonWatchEffect from './components/Person-watchEffect.vue';
import PersonTs from './components/Person-ts.vue';

import { ref, reactive } from 'vue';
import type { persons } from './types';
// const children = ref(null);

// const showChildren = () => { 
//   console.log(children.value);

// }

let personList = reactive<persons>([
  {name: '张三1', age: 18},
  {name: '李四', age: 100},
  {name: '王五', age: 20},
])
// export default {
//   name: 'App',
//   components: {
//     Person,
//     PersonSetup,
//     PersonReactive,
//     PersonRef,
//     PersonComputed,
//     PersonWatch1,
//     PersonWatch2,
//     PersonWatchEffect
//   }
// }
</script>


<style scoped>
.title {
  color: red;
  padding: 20px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>
