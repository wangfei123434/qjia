<!-- 首页的头部的子组件 -->
<template>
  <van-sticky>
    <div class="header" v-if="$route.path!='choosematerials'">
      <ul class="nav-header">
        <li>
          <div>
            <span class="logo">
              <img src="../assets/images/home/jia_logo.png" alt class="jialogo" />
            </span>
            <span>
              深圳
              <i class="iconfont icon-xialasanjiao"></i>
            </span>
          </div>
          <div>
            <span>
              <img src="../assets/images/home/zizhi-icon.png" alt />
            </span>
            <span>
              <img src="../assets/images/home/tousu_icon_w.png" alt />
            </span>
            <span class="complain">投诉</span>
            <span class="search">
              <img src="../assets/images/home/search_icon_w.png" alt />
            </span>
            <span class="aboutme">
              <router-link to="/login">
                <img src="../assets/images/home/white_person.png" alt />
              </router-link>
            </span>
          </div>
        </li>
      </ul>
      <div class="headernav">
        <nav class="mynav">
          <div :class="{active:curindex==0}" @click="curindex=0">
            <router-link to="/home">首页</router-link>
          </div>
          <div :class="{active:curindex==1}" @click="curindex=1">
            <router-link to="/renovation">找装修</router-link>
          </div>
          <div :class="{active:curindex==2}" @click="curindex=2">
            <router-link to="/buildingMaterials">选建材</router-link>
          </div>
          <div :class="{active:curindex==3}" @click="curindex=3">
            <router-link to="/community">社区</router-link>
          </div>
        </nav>
        <!-- <div class="navcontent">
                <router-view></router-view>
        </div>-->
      </div>
    </div>
    <!-- <div v-for="item in cartData">
      <img style="width:200px" :src="item.img" alt />
      <p>{{item.name}}</p>
      <p>{{item.attr}}</p>
      <p>数量：{{item.count}}</p>
    </div> -->
  </van-sticky>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "myheader",
  data: function() {
    return {
      curindex: 0
    };
  },
  computed: {
    // ...mapState(["cartData", "count"])
  }
};
</script>
<style lang="less">
@import url("../assets/css/myfont/iconfont.css");
@import url("../assets/css/header/header.css");
</style>