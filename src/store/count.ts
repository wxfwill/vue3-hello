import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
    state: () => {
        return {
            sum: 8,
            school: 'haha',
            address: 'beijing'
        }
    },
    getters: {
        // bugSum: (state) => {
        //     return state.sum * 5;
        // },
        bigSum(): number {
            // this 是指当前的store实例
            return this.sum * 10;
        }
    },
    actions: {
        increment(val: number) {
            console.log('val==', val);
            this.sum += Number(val);
        }
    }
})