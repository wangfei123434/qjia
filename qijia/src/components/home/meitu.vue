<template>
  <div class="meitu">
    <div class="top">
      <img src="../../assets/images/home/banner.png" alt />
      <img src="../../assets/images/home/logo1.jpg" class="logo" />
      <span>居众装饰品质家装</span>
      <p>专注家装设计 口碑保障</p>
    </div>
    <div class="logotop">
      <img src="../../assets/images/home/tuku-jia-logo.png" alt />
      <img src="../../assets/images/home/search_icon_w.png" alt class="search" />
    </div>
    <!-- 筛选导航区域 -->
    <div class="tuku-page">
      <ul class="ullist">
        <li
          v-for="(item,index) in ullist"
          :key="index"
          v-bind:class="{tored:curindex==index}"
          @click="clickchange(index,item)"
        >
          {{item.title}}
          <!-- <ul class="navlist">
            <li v-for="(itemc,indexc) in item.desc" :key="indexc">{{itemc.name}}</li>
          </ul>-->
        </li>
      </ul>
      <!-- <!要展示的区域-->
      <ul class="picsshow">
        <li v-for="(item,index) in ullist" :key="index" v-show="index==curindex">
          <div v-for="(itemc,indexc) in item.desc" :key="indexc" class="picsdisplay">
            <div v-for="(itemz,indexz) in itemc.stylepic" :key="indexz">
              <img :src="itemz.imgSrc" alt class="pic01" />
              <p class="title">{{itemz.finishStyle}}</p>
              <p class="smalltitle">{{itemz.smalltitle}}</p>
              <img :src="itemz.person" alt class="person" />
              <span class="name">{{itemz.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部区域 -->
    <aside>
      <div class="footer">
        <ul>
          <li v-for="(item,index) in footerlist" :key="index" @click="show(index,item)">
            <span class="activeborder" v-show="isshow"></span>
            <img :src="item.smallpic" alt />
            <br />
            <span :style="{color:colorindex==index?item.color:'#000'}">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </aside>
    <!-- 底部的弹出的盒子 -->
    <div class="footer-pic">
      <van-popup v-model="isshow" position="bottom" closeable>
        <div class="totop" v-for="(item,index) in footerlist" :key="index" v-show="index==sactive">
          <div class="picbox">
            <img :src="item.imgsrc" alt class="pics" />
          </div>
          <div class="input-area">
            <form action>
              <span class="span01">{{item.area}}</span>
              <input type="text" placeholder="80" />
              <span class="span02">m²</span>
            </form>
            <form action>
              <span class="span01">{{item.tel}}</span>
              <input type="text" placeholder="请输入您的手机号码" />
            </form>
          </div>
          <div class="btn" v-bind:style="{background:item.color}">
            <button v-bind:style="{background:item.color}">{{item.btn}}</button>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  name: "meitu",
  data: function() {
    return {
      ullist: [],
      footerlist: [],
      curindex: 0,
      activeshow: 0,
      active: 0,
      isshow: false,
      colorindex: 0, //颜色的索引,
      sactive: 0
    };
  },
  mounted() {
    //请求meitu的数据
    this.getmeitudata();
  },
  methods: {
    getmeitudata() {
      this.$axios.get("/data/home/meitu.json").then(res => {
        this.ullist = res.data.mydata.nav;
        this.footerlist = res.data.mydata.footerpic;
      });
    },
    clickchange(index, item) {
      this.curindex = index;
    },
    show(index, item) {
      this.colorindex = index;
      this.isshow = !this.isshow;
      console.log(index);
      this.sactive = index;
    }
  }
};
</script>
<style  lang="less" scoped>
@import url("../../assets/css/meitu/meitu.css");
</style>