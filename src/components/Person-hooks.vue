<template>
  <div class="person">
    <h3>hook</h3>
    <p>当前求和为：{{ sum }}</p>
    <button @click="add">点我+1</button>
    <div>
      <img v-for="dog in dogList" :key="dog" :src="dog" alt="dog" class="dog-img">
    </div>
    <button @click="getDog">再来一只狗</button>
  </div>
</template>

<script lang="ts" setup>
import useSum from '@/hooks/useSum';
import useDog from '@/hooks/useDog';

const { sum, add } = useSum();
const { dogList, getDog } = useDog();

</script>

<style scoped>
.person {
  width: 100%;
  padding: 10px;
  background-color: hotpink;
  box-shadow: 5px 5px 5px 5px grey;
}
.dog-img {
  height: 100px;
  margin-right: 5px;
}
</style>