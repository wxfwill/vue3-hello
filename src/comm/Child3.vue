<template>
    <div class="child">
        <h2>v-modal的方式</h2>
        父亲给的玩具：{{ custom }}
        <!-- <input type="text" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"> -->
        <input type="text" :value="custom" @input="emit('update:custom', ($event.target as HTMLInputElement).value)">

 </div>
</template>

<script lang="ts" setup name="Child3">
    import { ref, inject } from 'vue'

//     defineProps(['modelValue']);
// let emit = defineEmits(['update:modelValue']);

    defineProps(['custom']);
    let emit = defineEmits(['update:custom']);

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