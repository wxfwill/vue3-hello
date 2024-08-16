<template>
    <div class="child">
        儿子2的玩具：{{ toy }}
        <p>父亲给儿子的车：{{ car }}</p>
        <!-- 子传父 第一种方式 函数形式 -->
        <button type="button" @click="sendToy(toy)">给父亲玩具</button>
        <!-- 第二种方式 自定义事件 -->
        <button type="button" @click="emit('sendToy', '变形金刚', $event)">给父亲另外一个玩具</button>
        <p>哥哥给的玩具:===={{ toy1 }}</p>
    </div>
</template>

<script lang="ts" setup name="Father">
    import { ref, inject } from 'vue'
    let toy = ref('奥特曼');
    let toy1 = ref(''); 
    let emitter = inject<any>('emitter');

    defineProps(['car', 'sendToy'])

    // 子传父 自定义事件形式
    let emit = defineEmits(['sendToy']);

    emitter.on('sendToy1', (val:string) => { 
        toy1.value = val;
    })

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