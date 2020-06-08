<template>
  <div id="app">
    <myheader v-if="$route.path!='/reservation'&&$route.path!='/login'"></myheader>
    <router-view />
  </div>
</template>
<script>
import myheader from "./components/header.vue";
import { obj } from "./utils.js";
export default {
  components: {
    myheader
  },
  mounted() {
    //挂载完之后去执行这个setrem()
    obj.setRem();
  }
};
</script>

<style lang="less">
body {
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  display: inline-block;
  color: #000;
  text-decoration: none;
}
</style>