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
<<<<<<< HEAD

=======
>>>>>>> 95e62064e7a44301016c6020080825bb484326b1
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  //  text-align: center;
=======
>>>>>>> 95e62064e7a44301016c6020080825bb484326b1
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