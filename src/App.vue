<template>
<div>
  <!-- <h2>vue3组件通信</h2> -->
  <!-- <Father></Father> -->
   <div>vue3 slot插槽</div>
   <Slot1></Slot1>
</div>

</template>

<script lang="ts" setup name="App">
import Slot1 from './comm/Slot1.vue';

</script>


<style scoped>
div{
  text-align: center;
}
</style>
