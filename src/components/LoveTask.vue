<template>
  <div class="task">
    <button type="button" @click="add">添加一句</button>
    <ul>
        <li v-for="item in dataList" :key="item.id">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTask">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTaskStore } from '@/store/lovetask';
import {  storeToRefs } from 'pinia';

const taskStore = useTaskStore();

let { dataList } = storeToRefs(taskStore);

// let dataList = reactive([
//     {
//         id: 'gg01',
//         name: '今天你有点怪，哪里怪？怪还看',
//     },
//     {
//         id: 'gg02',
//         name: '草莓，蓝莓，蔓越莓，今天想我了没？',
//     },
//     {
//         id: 'gg03',
//         name: '心里给你留了一块地，我的死心塌地',
//     }]);

const add = () => { 
    taskStore.getTask();
    // axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
    //     console.log(res?.data?.content);
    //     let obj = { id: nanoid(), name: res?.data?.content };
    //     // dataList.unshift(obj);
    //     // dataList.push({
    //     //     id: 'gg01',
    //     //     name: res.data.data
    //     // })
    // })
}


taskStore.$subscribe((mutype, state) => { 
    console.log('土味情话发生变化==', mutype, state);
    // dataList.value = 
    localStorage.setItem('dataList', JSON.stringify(state.dataList))
    
})
</script>

<style scoped>
.task {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-top: 10px;
    background-color: hotpink;
}
</style>