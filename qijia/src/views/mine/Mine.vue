<template>
  <div class="mine">
    <header class="header">
      <a href="#" class="sj" @click="goto"></a>
      <h2>我的齐家</h2>
      <a href="#" class="menu"></a>
    </header>
    <div class :class="[login==true?'headersectiontrue':'headersection']">
      <div class="loginwrap" v-if="!login">
        <span @click="gotologin">登录/注册</span>
        <p>登陆后享受更多装修服务</p>
      </div>
      <div class="mine" v-else>
        <div class="title">
          <div class="img">
            <img src="../../assets\images\社区/avatar.png" alt />
          </div>
          <span class="i">用户：{{loginmsg}}</span>
          <span class="set">
            <img class="icon" src="../../assets\images\社区/bi.png" alt />账户设置
          </span>
        </div>
        <div class="imsg">
          <div>
            <p>0.00</p>余额
          </div>
          <div>
            0.00
            <p>建材贷款</p>
          </div>
          <div>
            0.00
            <p>装修贷款</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-section">
      <span>
        <i class="iconfont icon-xinxi"></i>
        信息
      </span>
    </div>
    <div class="item-section">
      <div class="item" :class="item.class" v-for="(item,index) in list" :key="index">
        <i class="iconfont left" :class="[item.icon]"></i>
        <span>{{item.title}}</span>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon2" />
        </svg>
        <i class="iconfont icon-you"></i>
      </div>
    </div>
    <footer class="footer">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in datalist" :key="index">
            <div class="wrap">
              <div class="img">
                <img :src="item.imgsrc" alt />
              </div>
              <div class="font">
                <p class="top">
                  <span class="bgc">在线客服</span>
                  <span class="title">{{item.title}}</span>
                </p>
                <p class="txt">{{item.txt}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>copyright © 2005-2018齐家Jia.com版权所有</p>
      <p>沪ICP备05008272号-4 沪B2-20090108</p>
      <p class="bd">
        <img src="../../assets/images/社区/m_foot_telicon.png" /> 齐家服务热线：400-660-7700
      </p>
    </footer>
  </div>
</template>
<script>
window.addEventListener("storage", function(e) {
  // console.log(e);
  // console.log('更改了本地储存');
  window.location.reload(true);
});
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "Mine",
  data() {
    return {
      list: [
        {
          icon: "icon-manage-order",
          title: "我的装修需求单",
          class: "margin",
          icon2: "#icon-youhuiquan"
        },
        { icon: "icon-qiaquan", title: "我的卡券" },
        { icon: "icon-dingdan", title: "我的订单" },
        { icon: "icon-leijiyuyue", title: "我的预约", class: "margin" },
        { icon: "icon-wenda", title: "我的问答" },
        { icon: "icon-luntan", title: "我的论坛" },
        { icon: "icon-shoucang", title: "我的收藏" },
        { icon: "icon-yanjing", title: "我的关注" },
        { icon: "icon-pinglun", title: "我的评论" },
        { icon: "icon-qian", title: "查公积金", class: "margin" },
        { icon: "icon-download", title: "下载APP" },
        { icon: "icon-guanyu", title: "关于齐家" },
        { icon: "icon-shangjiaruzhu", title: "入驻齐家" },
        { icon: "icon-tousu1", title: "投诉建议", class: "margin" }
      ],
      datalist: [],
      login: false,
      loginmsg: ""
    };
  },
  mounted() {
    this.getdata();
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: 5000,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 8,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true
    });
    let lmsg = sessionStorage.getItem("uname");
    if (lmsg != null) {
      this.login = true;
      this.loginmsg = lmsg;
    }
  },
  methods: {
    goto(){
            this.$router.go(-1);
    },
    getdata() {
      this.$axios
        .get("/data/我的齐家/mine.json")
        .then(res => {
          // console.log(res);
          this.datalist = res.data.list;
          // console.log(this.datalist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    gotologin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/myqijiafont/iconfont.css");
.icon {
  font-size: 22px;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.header {
  position: relative;
  background-color: #f6f6f6;
  height: 80/100rem;
  line-height: 80/100rem;
  text-align: center;
  .sj {
    top: 0;
    left: 0;
    border-left: 3/100rem solid #333;
    border-bottom: 3/100rem solid #333;
    width: 25/100rem;
    height: 25/100rem;
    display: inline-block;
    transform: rotate(45deg);
    margin: 25/100rem;
  }
  a {
    position: absolute;
  }
  h2 {
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
  }
  .menu {
    top: 0;
    right: 0;
    background: url(//fastued3.jia.com/mob/image/common/wap/header-icon.png)
      no-repeat;
    width: 40/100rem;
    height: 40/100rem;
    background-size: 115% auto;
    background-position: 0 10%;
    margin: 20/100rem;
  }
}
.headersectiontrue {
  background-image: url(../../assets/images/社区/i-topbg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 20/100rem 30/100rem;
  .mine {
    .img {
      vertical-align: middle;
      background: #f6f1f1;
      display: inline-block;
      border-radius: 50%;
      height: 100/100rem;
      width: 100/100rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .i {
      margin: 0 30/100rem;
      font-size: 18px;
      font-weight: bold;
    }
    .set {
      padding: 6/100rem;
      border-radius: 25px;
      border: 1px solid #666666;
      font-size: 13px;
      .icon {
        width: 22/100rem;
        height: 22/100rem;
        margin-right: 10/100rem;
      }
    }
    .imsg {
      margin: 10/100rem auto;
      margin-top: 30/100rem;
      width: 80%;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      text-align: center;
    }
  }
}
.headersection {
  background-image: url(../../assets/images/社区/i-topbg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 80/100rem;
  .loginwrap {
    font-size: 12px;
    color: #999999;
    text-align: center;
    span {
      display: inline-block;
      margin-bottom: 20/100rem;
      letter-spacing: 2px;
      font-size: 13px;
      color: #fff;
      border-radius: 25px;
      background: linear-gradient(90deg, #f15f2f, #ee2e1c);
      padding: 10/100rem 20/100rem;
    }
  }
}
.tab-section {
  border-top: 1px solid #ecebeb;
  padding: 25/100rem 0;
  text-align: center;
  color: #333333;
  font-size: 12px;
  i {
    font-size: 10px;
    color: #ffac00;
  }
}
.item-section {
  background-color: #efefef;
  font-size: 14px;
  padding: 1/100rem 0;
  span {
    display: inline-block;
    height: 42/100rem;
  }
  i {
    vertical-align: middle;
    font-size: 20px;
  }
  .item {
    background-color: #fff;
    padding: 20/100rem;
    border-bottom: 1px solid #ecebeb;
    .icon{
      position: relative;
      top: -6/100rem;
      left: 5/100rem;
    }
    &.margin {
      margin: 20/100rem 0;
      border: none;
    }
    .left {
      margin-right: 20/100rem;
    }
    .icon-you {
      float: right;
    }
  }
}
.footer {
  width: 100%;
  background-color: #efefef;
  text-align: center;
  font-size: 12px;
  color: #999;
  .swiper-container {
    padding: 20/100rem 0 50/100rem;
    // height: 300/100rem;
    width: 100%;
    .swiper-slide {
      width: 80%;
    }
    .wrap {
      background-color: #fff;
      border: solid 1px #dedede;
      height: 130/100rem;
      .img {
        margin: 10/100rem 20/100rem;
        float: left;
        width: 110/100rem;
        height: 110/100rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .font {
        padding: 10/100rem;
        .top {
          margin-bottom: 15/100rem;
          .bgc {
            color: #fff;
            background-color: #dd0000;
            border-radius: 25px;
            padding: 3/100rem 15/100rem;
            margin-right: 10/100rem;
          }
        }
        .txt {
          line-height: 1.2;
          overflow: hidden;
          text-overflow: clip;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          color: #333333;
          text-align: left;
        }
      }
    }
  }
  > p {
    padding: 10/100rem 0;
  }
  .bd {
    img {
      vertical-align: middle;
      width: 20/100rem;
    }
    color: #333333;
    padding: 20/100rem 0;
    border-top: 1px solid #dddddd;
  }
}
</style>