<template>
  <div class="news-wrap">
    <ul>
      <li v-for="item in newList" :key="item.id">
        <button type="button" @click="lookAtDetal(item)">查看详情</button>
       <!-- <RouterLink :to="`/news/detail?id=${item.id}&name=${item.name}`">{{item.name}}</RouterLink>  -->
       <RouterLink :to="{
          name:'xiang',
          // params: {
          //   id: item.id,
          //   name: item.name 
          // }
          query: {
            id: item.id,
            name: item.name 
          }
       }">{{item.name}}</RouterLink> 
       <!-- params 参数不能传数组 -->
    </li>
    </ul>
    <div class="detal-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink, useRouter} from 'vue-router';

interface itemInter {
  id: string,
  name: string
}

// 数据
let newList = reactive([
  {id: 'sghgdhd01', name: '新闻1'},
  {id: 'sghgdhd02', name: '新闻2'},
  { id: 'sghgdhd03', name: '新闻3' }
])
let router = useRouter();

// 方法
const lookAtDetal = (item: itemInter) => {
  console.log(item)
  router.push({
    name: 'xiang', 
    query: {
      id: item.id,
      name: item.name 
    }
  })
}
</script>

<style scoped>
.news-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.news-wrap ul {
    width: 200px;
    height: 100%;
    background-color: #fff;
}
.detal-content {
  width: 100%;
  display: flex;
  background-color: #ccc;
}
</style>