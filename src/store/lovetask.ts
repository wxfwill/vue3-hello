import { defineStore } from 'pinia';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from 'vue';


// 选项式API
// export const useTaskStore = defineStore('task', {
//     actions: {
//         getTask() {
//             axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
//                 console.log(res?.data?.content);
//                 let obj = { id: nanoid(), name: res?.data?.content };
//                 this.dataList.unshift(obj);
//             })
//         }
//     },
//     state: () => {
//         return {
//             dataList: JSON.parse(localStorage.getItem('dataList') as string) || []
//         }
//     }
// })

// 组合式API
export const useTaskStore = defineStore('task', () => {
    let dataList = reactive(JSON.parse(localStorage.getItem('dataList') as string) || []);

    function getTask() {
        axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then(res => {
            console.log(res?.data?.content);
            let obj = { id: nanoid(), name: res?.data?.content };
            dataList.unshift(obj);
        })
    }
    return { dataList, getTask }
})