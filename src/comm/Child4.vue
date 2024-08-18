<template>
    <div class="child">
    <div>{{ $attrs }}</div>
    <div>房产：{{ house }}</div>
    <Child4_1 v-bind="$attrs" ref="c1"></Child4_1>
    <button @click="getC1">获取c1</button>
    <button type="button" @click="getAllChild($refs)">获取所有的子组建</button>
 </div>
</template>

<script lang="ts" setup name="Child4">
    import { ref, inject } from 'vue'
import Child4_1 from './Child4-1.vue';
let house = ref(4);
    let c1 = ref();
    const getC1 = () => {
        console.log(c1.value);
        // 父组件修改子组建的值
        c1.value.z += 2;
    }
const getAllChild = (el: object) => { 
    console.log('el==', el);
    
}

defineExpose({house});
</script>

<style scoped>
.child {
    width: 100%;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    padding: 10px
}
</style>