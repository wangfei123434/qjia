<template>
  <div class="box">
    <van-nav-bar border="false" right-text="按钮" class="top-nav">
      <template #left>
        <div class="border"></div>
      </template>
      <template #right>
        <a href="#" class="iconbgc"></a>
      </template>
    </van-nav-bar>
    <div class="top-pic">
      <img src="../../assets/images/社区/top_img.png" alt />
    </div>
    <div class="step-wrap">
      <div class="tit">
        <h3>服务流程</h3>
        <img src="../../assets/images/社区/step_4.png" alt />
      </div>
    </div>
    <div class="form-wrap">
      <div class="wrap">
        <div class="diqu">
          <div class="left">
            <i class="icon"></i>
            <span class="font">所在城市</span>
          </div>
          <div class="right"></div>
        </div>
        <div class="phone">
          <div class="left">
            <i class="icon"></i>
            <span class="font">联系方式</span>
          </div>
          <div class="right">
            <input type="number" placeholder="请输入您的手机号码" />
          </div>
        </div>
        <p class="tit">
          <input type="checkbox" />
          <span>
            我已阅读并且同意齐家网的
            <span class="color">用户协议</span>
          </span>
        </p>
        <p class="sub">
          <input type="submit" value="0元获取3套设计方案" />
        </p>
      </div>
      <p class="tit">
        <img src="../../assets/images/社区/secret.png" alt /> 齐家承诺：您的私人信息，不泄露给任何第三方。
      </p>
    </div>
    <div class="section">
      <div class="txt">
        <h3>户型美容 空间规划 让家更实用</h3>
        <p>3套设计方案挑选 做最优选择</p>
      </div>
      <img src="../../assets/images/社区/case_3.png" alt />
    </div>
    <div class="section-banner">
      <div class="txt">
        <h3>专业设计师1对1服务</h3>
        <p>量身定制化 适合的才是好的</p>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
            <div class="wrap">
              <div class="top">
                <div class="img">
                  <img :src="item.auter.imgsrc" alt />
                </div>
                <div class="font">
                  <p class="title">
                    <span class="autor">{{item.auter.name}}</span>
                    <span class="color">{{item.auter.title}}</span>
                  </p>
                  <p class="txt">{{item.auter.txt}}</p>
                </div>
              </div>
              <div class="img">
                <img :src="item.imgsrc" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-wrap">
      <div class="txt">
        <h3>现在申请送3项增值服务</h3>
      </div>
      <div class="wrap">
        <div class="item" v-for="(item,index) in navlist" :key="index">
          <div class="img">
            <img :src="item.imgsrc" alt />
          </div>
          <div class="font">
            <p class="title">{{item.title}}</p>
            <p class="con">{{item.con}}</p>
          </div>
        </div>
      </div>
      <p class="backtop" @click="backtop">
        <input type="submit" value="0元获取3套设计方案" />
      </p>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "freesheji",
  data() {
    return {
      bannerlist: [],
      navlist: []
    };
  },
  mounted() {
    this.getdata();
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: 5000,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      autoplayDisableOnInteraction: false,
      observer: true,
      centeredSlidesBounds: true,
      observeParents: true,
      initialSlide: 2
    });
  },
  methods: {
    getdata() {
      this.$axios
        .get("/data/免费设计/index.json")
        .then(res => {
          console.log(res);

          this.bannerlist = res.data.list;
          this.navlist = res.data.navlist;
          console.log(this.navlist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    backtop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  background-color: #f2f2f2;
  .top-nav {
    background-color: #fff;
    .border {
      width: 25/100rem;
      height: 25/100rem;
      border-top: 2px solid #333333;
      border-right: 2px solid #333333;
      transform: rotate(-135deg);
    }
    .iconbgc {
      display: block;
      height: 40/100rem;
      width: 40/100rem;
      background: url(../../assets/images/社区/share-white-icon.png) 0 100%
        no-repeat;
      background-size: 100% auto;
    }
  }
  .top-pic {
    background-color: #fff;
    img {
      width: 100%;
    }
  }
  .step-wrap {
    background-color: #fff;
    padding: 20/100rem 0;
    .tit {
      h3 {
        text-align: center;
        font-size: 15px;
        color: #333333;
      }
      img {
        margin: 20/100rem 0;
        width: 100%;
      }
    }
  }
  .form-wrap {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .wrap {
      box-shadow: 0.01rem 0.01rem 0.12rem 0.01rem rgba(82, 91, 100, 0.16);
      width: 92%;
      font-size: 12px;
      box-sizing: border-box;
      padding: 18/100rem;
      border-radius: 8px;
      >div {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 15/100rem;
        border: solid 1px #e6e6e6;
        border-radius: 8px;
        padding: 25/100rem 15/100rem;
        display: flex;
        justify-content: space-between;
        .left {
          .icon {
            display: inline-block;
            width: 28/100rem;
            height: 28/100rem;
            background-size: 100%;
            vertical-align: top;
            margin: 3/100rem 10/100rem 0 0;
            background: url(../../assets/images/社区/city_icon.png) 0 0
              no-repeat;
            background-size: 100%;
          }
        }
      }
      .phone {
        input {
          border: none;
          outline: none;
          width: 260/100rem;
          text-align: right;
        }
        .left {
          .icon {
            background: url(../../assets/images/社区/bm-icon.png) no-repeat;
            background-size: 100%;
            background-position: 0 44.9%;
          }
        }
      }
      .tit {
        color: #7885a0;
        margin-bottom: 15/100rem;
        input {
          margin-right: 10/100rem;
          position: relative;
          top: 4/100rem;
        }
        .color {
          color: #007fd7;
          text-decoration: underline;
        }
      }
      .sub {
        input {
          font-size: 15px;
          background: #ee2f1c;
          border-radius: 8px;
          border: none;
          width: 100%;
          color: #fff;
          padding: 15/100rem 0;
        }
      }
    }
    > .tit {
      padding: 20/100rem;
      color: #999999;
      font-size: 12px;
      img {
        width: 24/100rem;
      }
    }
  }
  .section {
    margin: 15/100rem 0;
    padding: 30/100rem 0;
    background-color: #fff;
    text-align: center;
    .txt {
      h3 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
        color: #b6b6b6;
      }
    }
    img {
      margin-top: 20/100rem;
      width: 100%;
    }
  }
  .section-banner {
    background-color: #fff;
    margin: 15/100rem 0;
    padding: 30/100rem 0;
    > .txt {
      margin-bottom: 20/100rem;
      text-align: center;
      h3 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
        color: #b6b6b6;
      }
    }
    .swiper-container {
      padding: 20/100rem 0;
      height: 600/100rem;
    }
    .swiper-slide-active {
      transform: scale(1.1);
      transition-duration: 0.5s;
    }
    .swiper-slide {
      padding: 10/100rem 0;
      width: 70%;
      height: 280/100rem;
      .wrap {
        box-sizing: border-box;
        box-shadow: 0.01rem 0.01rem 0.12rem 0.01rem rgba(82, 91, 100, 0.16);
        padding: 15/100rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .top {
          margin: 15/100rem 0;
          width: 95%;
          display: flex;
          justify-content: left;
          .img {
            margin-right: 20/100rem;
            width: 70/100rem;
            height: 70/100rem;
            img {
              width: 100%;
            }
          }
          .font {
            line-height: 1.5;
            font-size: 12px;
            .title {
              .autor {
                margin-right: 10/100rem;
              }
              .color {
                color: #db7000;
                background-color: #ffe9d2;
                border-radius: 25px;
                padding: 2/100rem 15/100rem;
              }
            }
            .txt {
              color: #b6b6b6;
            }
          }
        }
        > .img {
          width: 95%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .list-wrap {
    background-color: #fff;
    margin: 15/100rem 0;
    padding: 30/100rem 0;
    > .txt {
      text-align: center;
      h3 {
        font-size: 15px;
      }
    }
    .wrap {
      padding: 30/100rem 15/100rem;
      .item {
        margin-bottom: 15/100rem;
        box-shadow: 0.01rem 0.01rem 0.12rem 0.01rem rgba(82, 91, 100, 0.16);
        display: flex;
        .img {
          display: inline-block;
          width: 200/100rem;
          img {
            float: left;
            width: 200/100rem;
          }
        }
        .font {
          font-size: 12px;
          padding: 20/100rem;
          color: #666;
          .title {
            margin-bottom: 15/100rem;
          }
        }
      }
    }
    .backtop {
      input {
        font-size: 15px;
        background: #ee2f1c;
        border-radius: 8px;
        border: none;
        width: 95%;
        color: #fff;
        padding: 15/100rem 0;
        margin: 15/100rem;
        box-sizing: border-box;
      }
    }
  }
}
</style>