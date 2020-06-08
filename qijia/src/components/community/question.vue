<template>
  <div class="question">
    <div class="nav">
      <div class="left">
        <div class="item" :class="{active:currIndex==0}" @click="currIndex=0">
          <i class="img"></i>
          <p>
            <router-link to="/community/question/remen">热门</router-link>
          </p>
        </div>
        <div class="item" :class="{active:currIndex==1}" @click="currIndex=1">
          <i class="img"></i>
          <p>
            <router-link to="/community/question/remen">装修</router-link>
          </p>
        </div>
        <div class="item" :class="{active:currIndex==2}" @click="currIndex=2">
          <i class="img"></i>
          <p>
            <router-link to="/community/question/remen">建材</router-link>
          </p>
        </div>
        <div class="item" :class="{active:currIndex==3}" @click="currIndex=3">
          <i class="img"></i>
          <p>
            <router-link to="/community/question/remen">家居</router-link>
          </p>
        </div>
        <div class="item" :class="{active:currIndex==4}" @click="currIndex=4">
          <i class="img"></i>
          <p>
            <router-link to="/community/question/remen">家电</router-link>
          </p>
        </div>
      </div>
      <div class="rightsearch">
        <div class="img">
          <img src="../../assets/images/社区/look_answer_icon.png" alt />
        </div>
        <p>找答案</p>
      </div>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <span>没有更多啦~</span>
    </footer>
    <div class="fixedbtm">
      <a href="#">
        <i class="img">
          <img src="../../assets/images/社区/my_askfoot_icon.png" alt />
        </i>
        <span @click="zhezaoshow=true">我的问答</span>
      </a>
      <a href="#" class="bgc">
        <i class="img">
          <img src="../../assets/images/社区/my_quizfoot_icon.png" alt />
        </i>
        <span>我要提问</span>
      </a>
    </div>
    <div class="form" v-show="zhezaoshow" :class="{ftop:zhezaoshow}">
      <p class="close">
        <span @click="zhezaoshow=!zhezaoshow">X</span>
      </p>
      <p class="title">请选择快捷登录</p>
      <form action="#">
        <p class="after">
          <input type="number" placeholder="手机号" maxlength="11" />
        </p>
        <p class="yanzhengma after">
          <input type="text" placeholder="验证码" maxlength="4" />
          <span>换一张</span>
        </p>
        <p class="duanxinma after">
          <input type="text" placeholder="短信码" maxlength="6" />
          <span>获取短信码</span>
        </p>
        <p class="check">
          <input type="checkbox" />
          <span>一个月之内免登录</span>
        </p>
        <p class="sub">
          <input type="submit" value="登录" />
        </p>
        <p class="line">
          <span>其他账号登录</span>
        </p>
        <div class="iconbox">
          <a href="#" class="qq"></a>
          <a href="#" class="wb"></a>
        </div>
      </form>
    </div>
    <div class="zhezao" v-show="zhezaoshow" @click="zhezaoshow=false"></div>
  </div>
</template>
<script>
export default {
  name: "question",
  data() {
    return {
      zhezaoshow: false,
      currIndex: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
@keyframes from{
  0%  {
    top: 0;
  }
  50%{
    top: 55%;
  }
  65%{
    top: 45%;
  }
  80%{
    top: 53%;
  }
  90%{
    top: 48%;
  }
  100%{
    top: 50%;
  }
}
.question {
  padding-bottom: 160/100rem;
  .nav {
    font-size: 12px;
    display: flex;
    padding: 30/100rem;
    // margin-bottom: 10/100rem;
    border-top: 12px solid #f0f0f0;
    border-bottom: 5px solid #f0f0f0;
    .left {
      width: 80%;
      display: flex;
      .item {
        &.active {
          position: relative;
          &::before {
            content: "";
            width: 0;
            height: 0;
            border: 10/100rem solid;
            border-color: transparent transparent #f0f0f0;
            position: absolute;
            bottom: -30/100rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .img {
            background-color: #fecb4f;
          }
        }
        flex: 1;
        text-align: center;
        .img {
          display: inline-block;
          width: 50/100rem;
          height: 50/100rem;
          border-radius: 50%;
          background: url(http://mued3.jia.com/image/mobile/mAsk/icon_list_bgnew.png)
            0 0 no-repeat;
          background-size: 100%;
          background-color: #fcf8ef;
        }
      }
      .item:nth-of-type(2) {
        .img {
          background-position-y: 19.5%;
        }
      }
      .item:nth-of-type(3) {
        .img {
          background-position-y: 38.5%;
        }
      }
      .item:nth-of-type(4) {
        .img {
          background-position-y: 58%;
        }
      }
      .item:nth-of-type(5) {
        .img {
          background-position-y: 77%;
        }
      }
    }
    .rightsearch {
      flex: 1;
      text-align: center;
      .img {
        margin-top: 13/100rem;
        display: inline-block;
        width: 40/100rem;
        img {
          width: 100%;
        }
      }
    }
  }
  .footer {
    position: relative;
    &:before {
      content: "";
      display: block;
      border-bottom: 1px solid #cccccc;
      position: absolute;
      width: 100%;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
    }
    text-align: center;
    color: #999;
    font-size: 12px;
    span {
      position: relative;
      z-index: 2;
      background-color: #f0f0f0;
      padding: 4/100rem 15/100rem;
    }
  }
  .fixedbtm {
    border-top: 1px solid #ebebeb;
    z-index: 2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80/100rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      font-size: 12px;
      height: 50/100rem;
      width: 200/100rem;
      text-align: center;
      line-height: 50/100rem;
      border: 1px solid #dddddd;
      border-radius: 25px;
      .img {
        margin-right: 10/100rem;
        position: relative;
        top: -2/100rem;
        vertical-align: middle;
        display: inline-block;
        width: 28/100rem;
        height: 28/100rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
    }
    .bgc {
      color: #fff;
      background-color: #dd0000;
    }
  }
}
.zhezao {
  width: 100%;
  height: 100hv;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 3;
}
.form {
  animation: from .5s;
  &.ftop{
    top: 50%;
  }
  padding: 10/100rem;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 4;
  .after {
    text-indent: 20/100rem;
    position: relative;
  }
  .after::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.08rem;
    width: 100%;
    border: 1px solid #aaa;
    border-top: none;
    box-sizing: border-box;
  }
  .iconbox {
    height: 80/100rem;
    position: relative;
    a {
      position: absolute;
      top: 0;
      width: 80/100rem;
      height: 80/100rem;
      vertical-align: top;
      background: url(https://sslued.jia.com/image/mobile/mobile_shop/new_mobileshop/mobile_201412/other-login.png)
        0 0 no-repeat;
      background-size: 100%;
    }
    .qq {
      left: 20%;
    }
    .wb {
      right: 20%;
      background-position: 0 25%;
    }
  }
  .line {
    margin-bottom: 10/100rem;
    text-align: center;
    position: relative;
    span {
      color: #369af7;
    }
  }
  .line::before {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    content: "";
    top: 50%;
    position: absolute;
    width: 30%;
    height: 1px;
    margin-top: 0.01rem;
  }
  .line::after {
    right: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    content: "";
    top: 50%;
    position: absolute;
    width: 30%;
    height: 1px;
    margin-top: 0.01rem;
  }
  p {
    padding: 10/100rem 0;
    font-size: 12px;
    margin-bottom: 40/100rem;
    input {
      border: none;
      outline: none;
    }
    input::-webkit-input-placeholder {
      color: #c8c8c8;
    }
  }
  .check {
    margin-bottom: 10/100rem;
    input {
      position: relative;
      top: 4/100rem;
      margin-right: 8/100rem;
    }
  }
  .sub {
    input {
      background-color: #dd0000;
      color: #fff;
      text-align: center;
      width: 100%;
      height: 56/100rem;
      border-radius: 8px;
      letter-spacing: 10/100rem;
      font-size: 13px;
    }
  }
  .close {
    margin-bottom: 5/100rem;
    text-align: right;
    text-indent: 10/100rem;
    span {
      text-align: center;
      display: inline-block;
      width: 10%;
      color: #d1d1d1;
    }
  }
  .title {
    text-align: center;
    font-size: 14px;
    color: #333333;
  }
  form {
    padding: 10/100rem 40/100rem;
    .yanzhengma {
      input {
        width: 50%;
      }
      span {
        color: #369af7;
      }
    }
    .duanxinma {
      input {
        width: 60%;
      }
      span {
        color: #369af7;
      }
    }
  }
}
</style>