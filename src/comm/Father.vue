<template>
    <div class="father">
        <!-- 父亲的车：{{ car }}
        <p>儿子给父亲的玩具: {{ toy }}</p> -->
        <!-- 第一种方式 -->
        <!-- <Child :car="car" :sendToy="getToy"></Child> -->

        <!-- 第二种方式 子传父 自定义事件形式 -->
        <!-- <Child @sendToy="saveToy"></Child>
        <Child2></Child2> -->
        <!-- 第三种方式 v-modal 用在html标签上-->
         <!-- <input type="text" v-model="toy2"> -->
         <!-- <input type="text" :value="toy2" @input="toy2 = (<HTMLInputElement>$event.target).value"> -->

            <!-- v-modal 用在组建上 -->
        <!-- <Child3 v-model="toy2"></Child3> -->
         <!-- <p>测试：{{ toy2 }}</p> -->
        <!-- <Child3 
        :modelValue="toy2" 
        @update:modelValue="toy2 = $event">
    </Child3> -->

    <!-- 修改modelValue的值  同一个组建可以设置多个v-model的值-->
    <!-- <Child3 v-model:custom="toy2"></Child3> -->
     <!-- 第四种方式 $attrs-->
      <div>父亲的钱{{ money }}</div>
     <Child4 x="1" y="2" a="w" b="5"></Child4>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from './Child.vue';
import Child3 from './Child3.vue';
import Child4 from './Child4.vue'
import { ref, provide } from 'vue';

const car = ref('奔驰');
let toy = ref();
let toy2 = ref('modal的玩具');
const getToy = (val: string) => {
    console.log(val);
    toy.value = val;
}

const saveToy = (msg: string, ev: Event) => {
    console.log(msg, ev);
    toy.value = msg;
}

let money = ref(100);
function changeMoney(val: number) {
    money.value -= val;
}

provide('monenContext', { money, changeMoney });
</script>

<style scoped>
.father {
    width: 100%;
    background-color: pink;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    padding: 10px;
    box-sizing: border-box;
}
</style>