<template>
  <div class="content">
    <div >新闻的详情</div>
  <p>新闻id: {{ id }}</p>
  <p>新闻名字：{{ name }}</p>
  </div>

</template>

<script lang="ts" setup name="comp">
defineProps(['id', 'name'])
</script>

<style scoped>
.content {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
</style>