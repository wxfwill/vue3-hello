<template>
  <div class="person">
    <h2>watchEffect</h2>
    <p>水温: {{ temp }}</p>
    <p>水位: {{ height }}</p>
    <button type="button" @click="changeTemp">水温加1</button>
    <button type="button" @click="changeHeight">水位加一</button>

    <h2>ref标记</h2>
    <div ref="testRef">测试标记的内容</div>
    <button type="button" @click="showRef">展示ref内容1</button>

</div>
</template>

<script lang="ts" setup name="personComputed">
import { ref, watch, watchEffect } from 'vue';
// defineExpose 宏函数，可以不引入，直接使用
let temp = ref(10);
let height = ref(0);

const changeTemp = () => { 
  temp.value += 10;
}
const changeHeight = () => { 
  height.value += 10;
}

// watch 实现 需要明确指定要监视的值
// watch([temp, height], (val) => {
//   let [newTemp, newHeight] = val;
//     console.log(newTemp, newHeight);
//     if (newTemp >= 50 || newHeight >= 60) { 
//       console.log('给服务器发送警报');
//     }
//   })

// watchEffect 自动执行一次 不需要明确指定要监视的值，会自动监视所有响应式数据
watchEffect(() => {
  let newTemp = temp.value;
  let newHeight = height.value;
  console.log(newTemp, newHeight);
  if (newTemp >= 50 || newHeight >= 60) { 
    console.log('给服务器发送警报');
  }
})

// ref标记
const testRef = ref(null);
const showRef = () => { 
  console.log(testRef.value);
  
}

defineExpose({temp, height})

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