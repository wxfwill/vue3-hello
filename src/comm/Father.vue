<template>
    <div class="father">
        父亲的车：{{ car }}
        <p>儿子给父亲的玩具: {{ toy }}</p>
        <!-- 第一种方式 -->
        <!-- <Child :car="car" :sendToy="getToy"></Child> -->

        <!-- 第二种方式 子传父 自定义事件形式 -->
        <Child @sendToy="saveToy"></Child>
        <Child2></Child2>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from './Child.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';

const car = ref('奔驰');
let toy = ref();

const getToy = (val: string) => {
    console.log(val);
    toy.value = val;
}

const saveToy = (msg: string, ev: Event) => {
    console.log(msg, ev);
    toy.value = msg;
}

</script>

<style scoped>
.father {
    width: 100%;
    background-color: pink;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    padding: 10px
}
</style>