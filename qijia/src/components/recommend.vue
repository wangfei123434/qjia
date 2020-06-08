<template>
  <div class="recommend">
    <!-- 轮播图区域 -->
    <Banner swiperid="mybanner1" goTo="toLeft">
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img01.png" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img02.jpg" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img03.png" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img04.jpg" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img05.jpg" alt />
      </div>
    </Banner>
    <!-- 导航区域 -->
    <ul class="ul-nav">
      <li v-for="(item,index) in arrlist" :key="index">
        <img :src="item.url" alt class="mypic" />
        <span class="smalltitle">{{item.smalltitle}}</span>
        <br />
        <span>{{item.title}}</span>
      </li>
    </ul>
    <!-- 大图区域 -->
    <div class="nav-img">
      <img src="../assets/images/home/banner.png" alt class="banner" />
      <div class="linghang">
        <span>
          <img src="../assets/images/home/linghang.jpg" alt />
        </span>
        <span>领航装饰</span>
      </div>
      <span class="design">专注家装设计 口碑保障</span>
    </div>
    <!-- 深圳找装修区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3>深圳找装修</h3>
        </li>
        <li class="search-renovate-m">
          <span>百万业主口碑装修公司</span>
        </li>
        <li>
          <a href="#" class="more">更多></a>
        </li>
      </ul>
      <ul class="renovatenav">
        <li v-for="(item,index) in renovatearr" :key="index">
          <img :src="item.url" alt class="renovate-pic" />
          <br />
          <p class="renovate-title">{{item.title}}</p>
          <span class="iconfont icon-start-copy" style="color:red"></span>
          <br />
          <span class="service">{{item.service}}</span>
        </li>
      </ul>
      <div class="coupon">
        <p>装修有好券</p>
        <ul>
          <li v-for="(item,index) in couponarr" :key="index">
            <div class="coupon-left">
              <div class="coupon-top">
                <span>￥</span>
                <span class="aboutprice">{{item.price}}</span>
                <span class="use">{{item.use}}</span>
              </div>
              <div class="coupon-bottom">
                <span>{{item.validity}}</span>
              </div>
            </div>
            <div class="coupon-right">
              <span>{{item.getcoupon}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="goodservice">
        <p>装修好服务</p>
        <ul>
          <li v-for="(item,index) in goodservicearr" :key="index">
            <img :src="item.url" alt class="imgbg" />
            <h4>{{item.p1}}</h4>
            <span class="service-design">{{item.p2}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 深圳买建材区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(239, 78, 78)">深圳买建材</h3>
        </li>
        <li class="search-renovate-m">
          <span>
            <a href="#">查口碑</a>
            <a href="#">看点评</a>
            <a href="#">享优惠</a>
          </span>
        </li>
        <li>
          <a href="#" class="more">更多></a>
        </li>
      </ul>
      <!-- 橱柜  家具等的导航切换 -->
      <ul class="renovate-material">
        <li
          v-bind:class="{liactive:active==index}"
          @click="clickmaterial(index,item)"
          v-for="(item,index) in arr"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <!-- 下拉箭头 和上提的箭头 -->
      <div>
        <i class="iconfont icon-shanglajiantou" v-show="ishow" @click="pickup"></i>
        <i class="iconfont icon-xialasanjiao" v-show="!ishow" @click="show"></i>
      </div>
      <!-- 深圳买建材橱柜等对应渲染的数据 -->
      <ul class="renovatelist buymaterial">
        <li v-for="(item,index) in renovatematerialarr" :key="index" v-show="index==active">
          <div v-for="(itemc,indexc) in item.content" :key="indexc">
            <img :src="itemc.url" alt class="renovate-pic" />
            <br />
            <p class="renovate-title">{{itemc.title}}</p>
            <span class="iconfont icon-start-copy" style="color:red"></span>
            <br />
            <span class="num">
              口碑值:
              <span style="color:rgba(254, 62, 45)">{{itemc.num}}</span>
            </span>
            <br />
            <span class="service">{{itemc.service}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 精选品牌区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(124, 89, 224)">精选品牌</h3>
        </li>
        <li>
          <a href="#" class="more">深度解读更多大牌></a>
        </li>
      </ul>
      <ul class="brand">
        <li>
          <img src="../assets/images/home/sfy.png" alt />
        </li>
        <li>
          <span>齐家优选品牌推荐</span>
          <span>全家2000+线下实体门店</span>
        </li>
        <li class="gotosee">去看看</li>
      </ul>
    </div>
    <!-- 装修灵感 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(15, 170, 121)">装修灵感</h3>
        </li>
        <li class="search-renovate-m">
          <span>海量装修效果图</span>
        </li>
        <li>
          <a href="#" class="more">寻找家的感觉></a>
        </li>
      </ul>
      <ul class="nav-list">
        <!-- 效果图   案例 日记 -->
        <li
          v-bind:class="{actives:currentindex==index}"
          @click="change(index,item.title)"
          v-for="(item,index) in navlist"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <!-- 风格  户型  -->
      <ul class="stylelist">
        <li v-for="(item,index) in navlist" :key="index" v-show="index==currindex">
          <span
            v-bind:class="{sactive:scurrindex==indexc}"
            v-for="(itemc,indexc) in item.desc"
            :key="indexc"
            @click="changestyle(indexc,item)"
          >{{itemc.name}}</span>
        </li>
      </ul>
      <!-- 风格的展示 -->
      <ul class="style-display">
        <li v-for="(item,index) in navlist" :key="index" v-show="index==licurindex">
          <div
            v-for="(itemd,indexd) in item.desc"
            :key="indexd"
            class="mydiv"
            v-show="indexd==scurrindex"
          >
            <div v-for="(itemk,indexk) in itemd.stylepic" :key="indexk">
              <img :src="itemk.imgSrc" alt />
              <span class="styles" v-bind:style="{color:itemk.color}">{{itemk.finishStyle}}</span>
              <br />
              <span
                class="styles style01 style03"
                v-bind:style="{color:itemk.color1}"
              >{{itemk.title}}</span>
              <span class="styles style02 style04" v-bind:style="{color:itemk.color}">{{itemk.line}}</span>
              <br />
              <span class="count" v-bind:style="{color:itemk.color}">{{itemk.quantity}}</span>
            </div>
          </div>
        </li>
      </ul>
      <p class="searchmore">
        <a href="#">查看更多屋主装修过程></a>
      </p>
      <!-- 获取报价 -->
      <div>
        <p>在深圳，把家装成这样要花多少钱？</p>
        <ul class="getprice">
          <li>
            <img src="../assets/images/home/jiuanqi.png" alt />
          </li>
          <li class="price-right">
            <div class="top">
              <div>
                <input type="text" placeholder="房屋面积" />
              </div>
              <div class="input02">
                <input type="text" placeholder="2室1厅1厨1卫" />
                <span class="iconfont icon-xialasanjiao icon01" @click="getprice"></span>
              </div>
            </div>
            <div class="bottom">
              <button>获取报价</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 装修干货区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(77, 124, 226)">装修干货</h3>
        </li>
        <li class="search-renovate-m">
          <span>百万装友跳出的好内容</span>
        </li>
      </ul>
      <!-- 导航区域 -->
      <ul class="nav-list">
        <li
          v-for="(item,index) in ulnavlist"
          :key="index"
          v-bind:class="{actives:actives==index}"
          @click="changenav(index,item.name)"
        >{{item}}</li>
      </ul>
      <!-- 二级菜单  -->
      <div class="cargolist">
        <ul v-for="(item,index) in gongnue" :key="index">
          <li
            v-for="(itemc,indexc) in item.desc"
            :key="indexc"
            v-bind:class="{sactive:cuactive==indexc}"
          >{{itemc.name1}}</li>
        </ul>
        <!-- 小编推荐等 -->
        <div v-for="(items,indexs) in gongnue" :key="indexs" class="gongnues">
          <div
            v-for="(itemy,indexy) in items.desc"
            :key="indexy"
            class="gongbuenav"
            style="border-bottom: 1px solid rgba(236, 236, 236);"
          >
            <div v-for="(itemz,indexz) in itemy.stylepic" :key="indexz">
              <p>{{itemz.title}}</p>
              <img :src="itemz.imgsrc" alt class="gongnuepic" />
              <div>
                <span class="author">{{itemz.author}}</span>
                <span class="count">{{itemz.count}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层区域 -->
    <div class="mask" v-show="isclose"></div>
    <!-- 报价区域 -->
    <section class="bidprice" v-show="isclose">
      <a href="#" class="close" @click="clickclose">
        <img src="../assets/images/home/close.png" alt />
      </a>
      <p class="title">选择你家的户型</p>
      <div>
        <ul class="shi">
          <li>
            <a href>
              <p>1室</p>
            </a>
          </li>
          <li>
            <a href>
              <p>2室</p>
            </a>
          </li>
          <li>
            <a href>
              <p>3室</p>
            </a>
          </li>
          <li>
            <a href>
              <p>4室</p>
            </a>
          </li>
          <li>
            <a href>
              <p>5室</p>
            </a>
          </li>
        </ul>
        <ul class="ting">
          <li>
            <a href>
              <p>1厅</p>
            </a>
          </li>
          <li>
            <a href>
              <p>2厅</p>
            </a>
          </li>
          <li>
            <a href>
              <p>3厅</p>
            </a>
          </li>
          <li>
            <a href>
              <p>4厅</p>
            </a>
          </li>
          <li>
            <a href>
              <p>5厅</p>
            </a>
          </li>
        </ul>
        <ul class="chu">
          <li>
            <a href>
              <p>1厨</p>
            </a>
          </li>
          <li>
            <a href>
              <p>2厨</p>
            </a>
          </li>
          <li>
            <a href>
              <p>3厨</p>
            </a>
          </li>
          <li>
            <a href>
              <p>4厨</p>
            </a>
          </li>
          <li>
            <a href>
              <p>5厨</p>
            </a>
          </li>
        </ul>
        <ul class="wei">
          <li>
            <a href>
              <p>1卫</p>
            </a>
          </li>
          <li>
            <a href>
              <p>2卫</p>
            </a>
          </li>
          <li>
            <a href>
              <p>3卫</p>
            </a>
          </li>
          <li>
            <a href>
              <p>4卫</p>
            </a>
          </li>
          <li>
            <a href>
              <p>5卫</p>
            </a>
          </li>
        </ul>
      </div>
      <a href="#" class="confirmbtn">确定</a>
    </section>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";

export default {
  name: "recommend",
  components: {
    Banner
  },
  data: function() {
    return {
      active: 0, //当前索引
      zactive: 0, //当前索引
      actives: 0, //当前索引
      currentindex: 0, //当前索引
      currindex: 0, //当前索引
      scurrindex: 0, //当前索引
      licurindex: 0,
      currentView: "", //买建材对应要显示的内容
      ishow: false, //箭头和剩下的建材的是否显示
      isclose: false,
      arrlist: [],
      renovatearr: [],
      couponarr: [],
      goodservicearr: [],
      renovatematerialarr: [],
      splicearr: [],
      buymateriallist: [],
      stylearr: [],
      navarr: [],
      apartment: [],
      casearr: [],
      descarr: [],
      casepic: [],
      diaryarr: [],
      stylepicarr: [],
      arr: [],
      goodsarr: [],
      navlist: [],
      showgoods: [],
      ulnavlist: [],
      gongnue: [],
      cuactive:0
    };
  },
  mounted() {
    //请求index的数据
    this.getindexdata();
  },
  methods: {
    getindexdata() {
      console.log("bbb");
      this.$axios.get("/data/home/index.json").then(res => {
        //   let obj = {
        //     list1:[],
        //     list2:[],
        //     list3:[],
        //   }
        // let {list1,list2,list3} = obj
        // let [a,b,c] = [1,2,3]

        console.log("加油", res.data.mydata.nav);
        console.log("更改", res.data.mydata.renovatematerial);
        this.renovatematerialarr = res.data.mydata.renovatematerial;
        this.navlist = res.data.mydata.nav;
        this.arrlist = res.data.mydata.ullists;
        this.renovatearr = res.data.mydata.renovate;
        this.couponarr = res.data.mydata.coupon;
        this.goodservicearr = res.data.mydata.goodservice;

        this.buymateriallist = res.data.mydata.buymateriallist;
        this.showgoods = res.data.mydata.showgoods;
        this.ulnavlist = res.data.mydata.ulnavlist;
        this.gongnue = res.data.mydata.gongnue;
        console.log("showgoods", this.showgoods);
        console.log("睡觉", res.data.mydata.ulnavlist);

        // this.navarr = res.data.mydata.nav;
        // this.apartment = res.data.mydata.apartment;
        // this.casearr = res.data.mydata.case.title;
        // this.casepic = res.data.mydata.case.casepics;
        // this.stylepicarr = res.data.mydata.case.stylepics;

        this.goodsarr = res.data.mydata.goods;
        console.log(this.goodsarr);

        let arr = this.renovatematerialarr.filter((item, i) => {
          return i < 8;
        });
        this.arr = arr;
        console.log("arr", arr);
      });
    },
    //点击买建材对应的选项
    clickmaterial(i, v) {
      console.log("点击选建材", i, v);
      this.active = i;
    },
    pickup() {
      console.log("收起来");
      //点击上拉的时候下拉箭头显示  收起箭头消失
      //点击上拉的时候 只显示前10个
      let arr = this.renovatematerialarr.filter((item, i) => {
        return i < 8;
      });
      this.arr = arr;
      this.ishow = false;
    },
    show() {
      console.log("下拉显示出来");
      //点击下拉的时候 下拉箭头消失  收起箭头显示
      //点击下来的时候 整个数组显示出来
      this.ishow = true;
      this.arr = this.renovatematerialarr;
      // this.renovatematerialarr.push(this.splicearr );
    },
    change(i, v) {
      console.log("已经改变了", i, v);
      this.currentindex = i;
      this.currindex = i;
      this.licurindex = i;
    },
    changenav(index, item) {
      console.log(item, index);
      this.actives = index;
    },
    changestyle(indexc, item) {
      console.log(indexc, item);
      this.scurrindex = indexc;
    },
    clickclose() {
      console.log("关闭了");
      this.isclose = false;
    },
    getprice() {
      this.isclose = true;
    }
  }
};
</script>
<style lang="less">
@import url("../assets/css/myfont/iconfont.css");
@import url("../assets/css/recommend/recommend.css");
</style>

  
