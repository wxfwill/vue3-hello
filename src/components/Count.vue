<template>
<div class="count">
    <div>count组件</div>
    <p>当前的求和:{{ sum }}</p>
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
let sum = ref(1);
let selectValue = ref(1);

const add = () => { 
    sum.value = sum.value + Number(selectValue.value);
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