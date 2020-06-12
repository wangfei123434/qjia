<template>
  <div>
    <van-tabs v-model="activeName" animated>
      <van-tab title="效果图" name="a">
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
                <span
                  class="styles style02 style04"
                  v-bind:style="{color:itemk.color}"
                >{{itemk.line}}</span>
                <br />
                <span class="count" v-bind:style="{color:itemk.color}">{{itemk.quantity}}</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="案列" name="b" class="stylist">
        <ul class="stylelist">
          <li v-for="(item,index) in cases" :key="index" v-show="index==currindex">
            <span
              v-bind:class="{sactive:scurrindex==indexc}"
              v-for="(itemc,indexc) in item.desc"
              :key="indexc"
              @click="changestyle(indexc,item)"
            >{{itemc.name}}</span>
          </li>
        </ul>
        <ul class="style-display">
          <li v-for="(item,index) in cases" :key="index" v-show="index==licurindex">
            <div
              v-for="(itemd,indexd) in item.desc"
              :key="indexd"
              class="mydiv"
              v-show="indexd==scurrindex"
            >
              <div v-for="(itemk,indexk) in itemd.stylepic" :key="indexk" class="box">
                <img :src="itemk.imgSrc" alt />
                <p v-bind:style="{color:itemk.color}" class="title">{{itemk.finishStyle}}</p>
                <p class="word">{{itemk.title}}</p>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="日记" name="c">
        <div class="diray" v-for="(item,index) in diray" :key="index">
          <div v-for="(itemc,indexc) in item.stylepic" :key="indexc" class="diraybox">
            <img :src="itemc.imgSrc" alt class="titlepic" />
            <h4>{{itemc.title}}</h4>
            <p class="words">
              <img :src="itemc.person" alt  class="person"/>
              <span>{{itemc.desc}}</span>
              <span style="color:rgba(175, 175, 175)">/{{itemc.num}}/{{itemc.style}}</span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "renovateidea",
  mounted() {
    this.getindexdata();
  },
  data: function() {
    return {
      currindex: 0,
      scurrindex: 0,
      navlist: [],
      activeName: "a",
      licurindex: 0,
      cases: [],
      diray: []
    };
  },
  methods: {
    getindexdata() {
      console.log("zzz");
      this.$axios.get("/data/home/index.json").then(res => {
        console.log(res.data.mydata);
        this.navlist = res.data.mydata.xiaoguotu;
        this.cases = res.data.mydata.case;
        this.diray = res.data.mydata.diraies;
        console.log("嗯哼", this.navlist);
      });
    },
    changestyle(indexc, item) {
      console.log(indexc, item);
      this.scurrindex = indexc;
    }
  }
};
</script>
<style scoped lang="less">
@import url("../assets/css/renovateidea/renovateidea.css");
</style>