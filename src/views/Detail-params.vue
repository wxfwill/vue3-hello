<template>
  <div class="content">
    <div >新闻的详情</div>
  <p>新闻id: {{ params.id }}</p>
  <p>新闻名字：{{ params.name }}</p>
  </div>

</template>

<script lang="ts" setup name="comp">
import { ref, toRefs, watchEffect} from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let { params } = toRefs(route);
// let id = ref<any>(0);
// let name = ref<any>('');

// watchEffect(() => { 
//   id.value = route.query.id;
//   name.value = route.query.name;
// })
</script>

<style scoped>
.content {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
</style>