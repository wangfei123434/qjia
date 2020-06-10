<template>
  <div class="footer_list">
    <div>asd</div>
    <van-tabs v-model="activeName" animated>
      <van-tab title="攻略" name="a" class="case">
        <ul v-for="(item,index) in gongnuearr" :key="index" class="cargolist">
          <li
            v-bind:class="{sactive:cuactive==indexc}"
            v-for="(itemc,indexc) in item.desc"
            :key="indexc"
            @click="clickme(indexc,itemc)"
          >{{itemc.name1}}</li>
        </ul>
        <!-- 渲染区域 -->
        <div v-for="(item,index) in gongnuearr" :key="index">
          <div
            v-for="(itemc,indexc) in item.desc"
            :key="indexc"
            class="cargobox"
            v-show="indexc==liactive"
          >
            <div v-for="(itemz,indexz) in itemc.stylepic" :key="indexz" class="cragocontent" :class="{'right':itemz.imgsrc.length<=1,'right1':itemz.imgsrc.length>1}">
              <div class="left">
                <p class="title">{{itemz.title}}</p>
                <p class="myp">
                  <span class="author">{{itemz.author}}</span>
                  <span class="circle">ㆍ</span>
                  <span class="count">{{itemz.count}}</span>
                </p>
              </div>
              <!-- 如果说imgsrc中的数组的长度大于1的话 我就选用right1这套样式
              如果说是imgsrc中的数组长度要是小于等于1的话 我就选用right的这套样式 -->
              <div>
                <img v-for="(img,i) in itemz.imgsrc" :src="img" alt :key="i"/>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="问答" name="b" class="stylist">
        <div class="question-top">
          <form action>
            <div>
              <img src="../assets/images/home/vv.png" alt class="search" />
              <input type="text" placeholder="请输入您的装修困惑" />
            </div>
            <div class="div02">
              <img src="../assets/images/home/ccx.png" alt class="pen" />
              <input type="text" placeholder="我要提问" />
            </div>
          </form>
        </div>
        <ul class="ulnav">
          <li v-for="(item,index) in question" :key="index" v-bind:class="{sactive:sactive==index}" @click="changes(index,item)">
            <span v-for="(itemc,indexc) in item.desc" :key="indexc">{{itemc.name}}</span>
          </li>
        </ul>
        <div v-for="(item,index) in question" :key="index" class="divlist" v-show="index==vactive">
          <ul v-for="(itemc,indexc) in item.desc" :key="indexc" class="ullist">
            <li v-for="(itemz,indexz) in itemc.stylepic" :key="indexz">{{itemz}}</li>
          </ul>
        </div>
      </van-tab>
      <!-- <van-tab title="论坛" name="c" class="intro">
        <div class="myDiv">
          <div
            :class="{'van-multi-ellipsis--l3':isActive}"
            @click="isActive=false"
          >{{ introData.text}}</div>
          <p>
            营业时间
            <span>{{ introData.time}}</span>
          </p>
          <p>
            公司规模
            <span>{{ introData.gm}}</span>
          </p>
          <p>
            承接类型
            <span>{{ introData.lx}}</span>
          </p>
          <p class="van-ellipsis">
            服务区域
            <span>{{ introData.qy}}</span>
          </p>
          <p class="van-ellipsis">
            公司地址
            <span>{{ introData.dz}}</span>
          </p>
        </div>
        <p class="loading">
          <span>查看更多></span>
        </p>
      </van-tab>
      <van-tab title="视频" name="c" class="intro">
        <div class="myDiv">
          <div
            :class="{'van-multi-ellipsis--l3':isActive}"
            @click="isActive=false"
          >{{ introData.text}}</div>
          <p>
            营业时间
            <span>{{ introData.time}}</span>
          </p>
          <p>
            公司规模
            <span>{{ introData.gm}}</span>
          </p>
          <p>
            承接类型
            <span>{{ introData.lx}}</span>
          </p>
          <p class="van-ellipsis">
            服务区域
            <span>{{ introData.qy}}</span>
          </p>
          <p class="van-ellipsis">
            公司地址
            <span>{{ introData.dz}}</span>
          </p>
        </div>
        <p class="loading">
          <span>查看更多></span>
        </p>
      </van-tab>-->
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "cargotab",
  data: function() {
    return {
      activeName: "a",
      gongnuearr: [],
      question: [],
      isActive: true,
      cuactive: 0,
      liactive: 0,
      sactive: 0,
      vactive:0
    };
  },
  created() {
    this.getFooterData();
  },
  computed:{
    // right(){
    //   let right = ''
    //   console.log("aaa",this.gongnuearr)
    //   if(this.gongnuearr[0].desc){
    //     this.gongnuearr[0].desc.forEach(item=>{
    //       item.stylepic.forEach((item,i)=>{
    //         // console.log("item",i,item.imgsrc.length)
    //         if(item.imgsrc.length<=1){
    //           console.log("right")
    //           right = 'right'
    //         }else if(item.imgsrc.length>1){
    //           console.log("right1")
    //           right = 'right1'
    //         }
    //       })
    //     })
    //     return right
    //   }
    // }
  },
  methods: {
    getFooterData() {
      this.$axios.get("/data/home/index.json").then(res => {
        console.log("你好", res.data.mydata.question);
        this.gongnuearr = res.data.mydata.gongnue;
        this.question = res.data.mydata.question;
      });
    },
    clickme(i, v) {
      console.log(i, v);
      this.cuactive = i;
      this.liactive = i;
    },
      changes(i, v) {
      console.log(i, v);
      this.vactive = i;
        this.sactive = i;
     
    }
  }
};
</script>

<style scoped lang="less">
@import url("../assets/css/cargotab/cargotab.css");
</style>
