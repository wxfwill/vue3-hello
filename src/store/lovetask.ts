import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            dataList: [
                {
                    id: 'gg01',
                    name: '今天你有点怪，哪里怪？怪还看',
                },
                {
                    id: 'gg02',
                    name: '草莓，蓝莓，蔓越莓，今天想我了没？',
                },
                {
                    id: 'gg03',
                    name: '心里给你留了一块地，我的死心塌地',
                }]
        }
    }
})