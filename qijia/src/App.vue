<template>
  <div id="app">
    <myheader v-if="$route.path!='/reservation'&&$route.path!='/login'&&$route.path!='/meitu'&&$route.path!='/home/meitu'&&$route.path!='/findpwd'&&$route.path!='/register'"></myheader>
    <router-view />
    <!-- <div>
      <img style="width:200px" :src="goods.img" alt="">
      <p>{{goods.txt}}</p>
      <p>{{goods.attr}}</p>
      <p>数量：{{count}}</p>
    </div>
    <button @click="addCart">加入购物车</button>
  </div> -->
  </div>
</template>
<script>
import myheader from "./components/header.vue";
import { obj } from "./utils.js";
export default {
  data(){
    return {
      count:1,
      goods:{
        txt:"书包",
        img:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        attr:"16寸"
      }
    }
  },
  components: {
    myheader
  },
  methods:{
    // addCart(){
    //   let goods = {
    //     name:this.goods.txt,
    //     img:this.goods.img,
    //     attr:this.goods.attr,
    //     num:this.count
    //   }
    //   this.$store.commit("addGoods",goods)
    // }
  },
  mounted() {
    //挂载完之后去执行这个setrem()
    obj.setRem();
  }
};
</script>

<style lang="less">
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
  box-sizing: border-box;
}
a {
  display: inline-block;
  color: #000;
  text-decoration: none;
}
</style>