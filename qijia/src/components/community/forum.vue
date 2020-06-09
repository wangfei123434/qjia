<template>
  <div class="forum">
    <el-backtop :bottom="20" :right="15">
      <img src="../../assets/images/社区/back-top.png" alt style="width:.8rem" />
    </el-backtop>
    <div class="toplist-wrap">
      <div class="list" v-for="(item,index) in toplist" :key="index">
        <div class="img">
          <img :src="item.img" alt />
        </div>
        <span class="font">{{item.title}}</span>
      </div>
    </div>

    <div class="hot">
      <h1>热门</h1>
      <div class="color-font">
        <span
          v-for="(item,index) in colorfont"
          :key="index"
          v-bind:style="{background:item.bg_color}"
        >{{item.text}}</span>
      </div>
    </div>
    <div class="section">
      <van-tabs v-model="active" swipeable type="line" line-width=".5rem" color="#333333">
        <van-tab title="最新">
          <div class="wrap">
            <div class="item">
              <div class="list" v-for="(item,index) in newlist" :key="index">
                <div class="img">
                  <img :src="item.img" alt />
                </div>
                <div class="content">
                  <p class="txt">{{item.txt}}</p>
                  <p class="com">评论{{item.comments}}·赞{{item.praise}}</p>
                  <div class="router">
                    <i class="img">
                      <img :src="item.icon" alt />
                    </i>
                    <p class="routername">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="list" v-for="(item,index) in newlist" :key="index">
                <div class="img">
                  <img :src="item.img" alt />
                </div>
                <div class="content">
                  <p class="txt">{{item.txt}}</p>
                  <p class="com">评论{{item.comments}}·赞{{item.praise}}</p>
                  <div class="router">
                    <i class="img">
                      <img :src="item.icon" alt />
                    </i>
                    <p class="routername">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="精华">
          <div class="wrap">
            <div class="item">
              <div class="list" v-for="(item,index) in quelist" :key="index">
                <div class="img">
                  <img :src="item.img" alt />
                </div>
                <div class="content">
                  <p class="txt">{{item.txt}}</p>
                  <p class="com">评论{{item.comments}}·赞{{item.praise}}</p>
                  <div class="router">
                    <i class="img">
                      <img :src="item.icon" alt />
                    </i>
                    <p class="routername">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="list" v-for="(item,index) in quelist" :key="index">
                <div class="img">
                  <img :src="item.img" alt />
                </div>
                <div class="content">
                  <p class="txt">{{item.txt}}</p>
                  <p class="com">评论{{item.comments}}·赞{{item.praise}}</p>
                  <div class="router">
                    <i class="img">
                      <img :src="item.icon" alt />
                    </i>
                    <p class="routername">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="sendbtn" @click="zhezaoshow=true">
      <img src="../../assets/images/社区/Posted.png" alt />
      <p>发帖</p>
    </div>
    <div class="form" v-show="zhezaoshow">
      <p class="close">
        <span @click="zhezaoshow=!zhezaoshow">X</span>
      </p>
      <p class="title">请选择快捷登录</p>
      <form action="#">
        <p class="after">
          <input type="number" id="phone" placeholder="手机号" maxlength="11" />
        </p>
        <p class="yanzhengma after">
          <input type="text" id="yanzhengma" placeholder="验证码" maxlength="4" />
          <span>换一张</span>
        </p>
        <p class="duanxinma after">
          <input type="text" id="duanxinma" placeholder="短信码" maxlength="6" />
          <span>获取短信码</span>
        </p>
        <p class="check">
          <input type="checkbox" id="freelogin" />
          <span>一个月之内免登录</span>
        </p>
        <p class="sub">
          <van-button class="sub" type="primary" text="登录" @click="goaddress" />
          <van-notify v-model="btnshow" type="warning">
            <span id="alertmsg">{{msg}}</span>
          </van-notify>
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
      msg: "",
      btnshow: false,
      toplist: [],
      colorfont: [],
      active: 0,
      newlist: [],
      quelist: [],
      zhezaoshow: false,
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        borderRadius: "4px",
        lineHeight: "45px", // 请保持与高度一致以垂直居中
        background: "#e7eaf1" // 按钮的背景颜色
      }
    };
  },
  mounted() {
    this.getdata();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        this.$axios
          .get("/data/社区/community.json")
          .then(res => {
            res.data.data.list[0].list_li.forEach(item => {
              this.newlist.push(item);
            });
            res.data.data.list[1].list_li.forEach(item => {
              this.quelist.push(item);
            });
            console.log(this.newlist);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getdata() {
      this.$axios
        .get("/data/社区/community.json")
        .then(res => {
          console.log(res);
          this.toplist = res.data.data.nav;
          this.colorfont = res.data.data.hot_label;
          this.newlist = res.data.data.list[0].list_li;
          this.quelist = res.data.data.list[1].list_li;
          console.log(this.quelist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goaddress() {
      var phone = document.getElementById("phone").value;
      var yonghuxieyi = document.getElementById("yonghuxieyi");
      var yanzhengma = document.getElementById("yanzhengma").value;
      var duanxinma = document.getElementById("duanxinma").value;
      if (phone == "") {
        this.msg = "手机号不能为空";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(phone)) {
        this.msg = "手机号格式错误";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      } else if ((yanzhengma == "")) {
        this.msg = "验证码为空";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      } else if (yanzhengma != "1234") {
        this.msg = "验证码错误";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      }else if (duanxinma =="") {
        this.msg = "短信码为空";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      }else if (duanxinma !="654321") {
        this.msg = "短信码为空";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        }, 2000);
        return false;
      } else {
        this.msg = "登录成功";
        this.btnshow = true;
        setTimeout(() => {
          this.btnshow = false;
        this.zhezaoshow=false
        }, 2000);
        return false
      }
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes from {
  0% {
    top: 0;
  }
  50% {
    top: 55%;
  }
  65% {
    top: 45%;
  }
  80% {
    top: 53%;
  }
  90% {
    top: 48%;
  }
  100% {
    top: 50%;
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
  z-index: 1;
}

.sendbtn {
  position: fixed;
  right: 5%;
  bottom: 20%;
  width: 80/100rem;
  height: 80/100rem;
  border-radius: 50%;
  background-color: #fe2e5d;
  color: #fff;
  font-size: 12px;
  text-align: center;
  img {
    width: 35%;
    margin-top: 8%;
  }
}
.form {
  animation: from 0.5s;
  padding: 10/100rem;
  border-radius: 8px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 2;
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
    .sub {
      border: none;
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
.forum {
  padding-top: 25/100rem;
  border-top: 1px solid #eaeaea;
  width: 100%;
}
.toplist-wrap::-webkit-scrollbar {
  display: none;
}
.toplist-wrap::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden; //占位但不可见
}
.toplist-wrap {
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;

  .list {
    display: inline-block;
    position: relative;
    margin: 0 20/100rem;
    width: 120/100rem;
    height: 128/100rem;
    .img {
      width: 120/100rem;
      img {
        border-radius: 8px;
        width: 120/100rem;
      }
    }
    .font {
      border-radius: 8px;
      background-color: rgba(97, 96, 96, 0.8);
      height: 100%;
      line-height: 128/100rem;
      width: 80%;
      padding: 0 10%;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
    }
  }
}
.hot {
  padding: 0 20/100rem;
  margin: 80/100rem 0;
  h1 {
    margin-bottom: 20/100rem;
    font-size: 20px;
    color: #333333;
  }
  .color-font {
    span {
      display: inline-block;
      height: 40/100rem;
      line-height: 40/100rem;
      color: #fff;
      font-size: 12px;
      padding: 0 8/100rem;
      border-radius: 3px;
      margin: 10/100rem;
    }
  }
}
.section {
  .wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    .item {
      display: flex;
      flex-direction: column;
    }
    .list {
      display: inline-block;
      margin: 15/100rem;
      box-sizing: border-box;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      overflow: hidden;
      width: 90%;

      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .content {
        padding: 20/100rem 16/100rem;
      }
      .txt {
        font-size: 12px;
        font-weight: bold;
        color: #333333;
      }
      .com {
        font-size: 12px;
        color: #9999b3;
        margin: 25/100rem 0;
      }
      .router {
        display: flex;
        .img {
          overflow: hidden;
          border-radius: 50%;
          width: 40/100rem;
          height: 40/100rem;
          display: inline-block;
        }
        .routername {
          font-size: 12px;
          text-indent: 10/100rem;
        }
      }
    }
  }
}
</style>