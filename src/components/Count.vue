<template>
<div class="count">
    <div>count组件</div>
    <p>当前的求和:{{ countStore.sum }}</p>
    <p>school: {{ countStore.school }}----adress{{ countStore.address }}</p>
    <select v-model="selectValue">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add" class="btn">增加</button>
    <button @click="reduce" class="btn">减少</button>
</div>
</template>

<script lang="ts" setup name="Count">
import { ref } from 'vue';
import { useCountStore } from '@/store/count';
let sum = ref(1);
let selectValue = ref(1);
let countStore = useCountStore();

// 对象中的ref可以直接使用，不需要.value, 自己定义的ref需要.value
console.log(countStore.sum);
console.log(countStore.$state.sum);



const add = () => { 
    // sum.value = sum.value + Number(selectValue.value);

    // 第一种修改pinia中的数据
    // countStore.sum += 2;

    // 第二种修改pinia中的数据, 批量修改
    // countStore.$patch({
    //     sum: 99,
    //     school: '学校',
    //     address: '地址'
    // })

    //  第三种 action函数
    countStore.increment(selectValue.value);

}

const reduce = () => { 
    sum.value = sum.value - Number(selectValue.value);
}

</script>

<style scoped>
.count {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-top: 10px;
    background-color: skyblue;
}
.btn {
    margin-left: 10px;
}
</style>