import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
    state: () => {
        return {
            sum: 8,
            school: 'haha',
            address: 'beijing'
        }
    },
    actions: {
        increment(val: number) {
            console.log('val==', val);
            this.sum += Number(val);
        }
    }
})