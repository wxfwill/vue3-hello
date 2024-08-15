<template>
  <!-- <div class="title">hello vue3 66</div> -->
  <!-- <Person></Person>
  <PersonSetup></PersonSetup> -->
  <!-- <PersonReactive></PersonReactive> -->
  <!-- <PersonRef></PersonRef> -->
  <!-- <PersonComputed></PersonComputed> -->
  <!-- <PersonWatch1></PersonWatch1> -->
  <!-- <PersonWatch2></PersonWatch2> -->
  <!-- <PersonWatchEffect ref="children"></PersonWatchEffect>
     <button type="button" @click="showChildren">App展示ref</button> -->
  <!-- <PersonTs></PersonTs> -->
  <!-- <PersonHooks></PersonHooks> -->
  <div>
    <h2 class="title">vue测试</h2>
    <div class="nav">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name: 'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path: '/about'}" active-class="active">关于</RouterLink>
    </div>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink, useRouter} from 'vue-router';
// import Person from './components/Person.vue';
// import PersonSetup from './components/Person-setup.vue';
// import PersonReactive from './components/Person-reactive.vue';
// import PersonRef from './components/Person-ref.vue';
// import PersonComputed from './components/Person-computed.vue';
// import PersonWatch1 from './components/Person-watch1.vue';
// import PersonWatch2 from './components/Person-watch2.vue';
// import PersonWatchEffect from './components/Person-watchEffect.vue';
// import PersonTs from './components/Person-ts.vue';
// import PersonHooks from './components/Person-hooks.vue';

// import { ref, reactive } from 'vue';
// import type { persons } from './types';
// const children = ref(null);

// const showChildren = () => { 
//   console.log(children.value);

// }

// let personList = reactive<persons>([
//   {name: '张三1', age: 18},
//   {name: '李四', age: 100},
//   {name: '王五', age: 20},
// ])
// export default {
//   name: 'App',
//   components: {
//     Person,
//     PersonSetup,
//     PersonReactive,
//     PersonRef,
//     PersonComputed,
//     PersonWatch1,
//     PersonWatch2,
//     PersonWatchEffect
//   }
// }

const router = useRouter();
setTimeout(() => { 
  router.push('/news');
}, 3000)
</script>


<style scoped>
.title {
  color: rgb(193, 101, 101);
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  margin-bottom: 10px;
}
.nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
}
.nav a {
  text-decoration: none;
  color: rgb(193, 101, 101);
  font-size: 20px;

}
.nav a.active {
    color: rgb(255, 0, 0);
}
.main-content {
  margin-top: 10px;
  padding: 10px;
  min-height: 200px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
}
  
</style>
