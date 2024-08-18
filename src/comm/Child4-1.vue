<template>
    <div class="child2">
    <div>x: {{ x }} Y: {{ y }}</div>
    <div>{{ z }}</div>
    <button type="button" @click="changeHouse($parent)">修改父级数据</button>
    <p>收到爷爷的钱{{ money }}</p>
    <button type="button" @click="changeMoney(10)">修改爷爷的钱</button>
 </div>
</template>

<script lang="ts" setup name="Child4-1">
import { ref, inject } from 'vue';

let z = ref(23);

function changeHouse(parent:any) {
    // z.value = 'z2';
    console.log(parent.house);
    parent.house = Number(parent.house) -1;
}

let { money, changeMoney } = inject('monenContext', {money: 0, changeMoney: (params:number) => {}});

defineProps(['x', 'y']);
defineExpose({ z });
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