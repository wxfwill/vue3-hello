<template>
<div>
  我是App
  <Count></Count>
  <LoveTask></LoveTask>
</div>

</template>

<script lang="ts" setup name="App">
import Count from '@/components/Count.vue';
import LoveTask from '@/components/LoveTask.vue';

</script>


<style scoped>
div{
  text-align: center;
}
</style>
