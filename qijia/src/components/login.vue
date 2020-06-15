<template>
  <div class="login">
    <div class="top">
      <a href="#" class="iconfont icon-fanhuitubiao back" @click="goback"></a>
      <a href="#">登录</a>
    </div>
    <ul class="login-nav">
      <li @click="clicklogin" v-bind:class="isshow?'tored':''">快速登录</li>
      <li @click="clickbtn" v-bind:class="isshow?'':'tored'">齐家账号</li>
    </ul>
    <!-- 快速登录 -->
    <div class="login-form" v-show="isshow">
      <form action="#">
        <span class="span01">
          <img src="../assets/images/home/dd.png" alt />
        </span>
        <input type="text" placeholder="请输入手机号码" v-model="tel" />
      </form>
      <form action="#" class="form01">
        <div class="div01">
          <span class="span01">
            <img src="../assets/images/home/cc.png" alt />
            <input type="text" placeholder="请输入验证码" v-model="userCode" />
          </span>
        </div>
        <div class="div02">
          <img :src="code[this.imgCode].img" alt class="code" />
          <a href="#" @click.prevent="change">换一张</a>
        </div>
      </form>
      <form action="#" class="form02">
        <div>
          <span class="span01">
            <img src="../assets/images/home/cc.png" alt />
            <input type="text" placeholder="请输入短信校验码" v-model="num" />
          </span>
        </div>
        <div>
          <a
            href="#"
            @click.prevent="getcode"
            v-bind:disabled="Dphone"
            :class="{right_number:Dphone }"
            v-text="computedTime>0?`重新获取${computedTime}s`:'获取验证码'"
          >发送短信</a>
        </div>
      </form>
    </div>
    <!-- 齐家账号 -->
    <div class="login-form" v-show="!isshow">
      <form action="#">
        <span class="span01">
          <img src="../assets/images/home/renwu.png" alt class="person" />
        </span>
        <input type="text" placeholder="用户名/邮箱/手机号" v-model="username" />
      </form>
      <form action="#" class="form01 form03">
        <div class="div01">
          <span class="span01">
            <img src="../assets/images/home/yaoshi.png" alt class="password" />
            <input type="text" placeholder="请输入密码" v-model="pwd" />
          </span>
        </div>
        <div class="div02 div03">
          <a href="#"></a>
        </div>
      </form>
    </div>
    <p class="login-p">
      <input type="checkbox" />
      <span>一个月之内免登录</span>
    </p>
    <div class="btn">
      <input type="submit" @click="submitin" value="登录" />
    </div>
    <p class="pwd">
      <a href="#" @click.prevent="registerfast">立即注册</a>
      <a href="#" @click.prevent="forgetpwd">忘记密码</a>
    </p>
    <div class="other-login">
      <div>
        <span class="line line01"></span>
        <van-divider
          :style="{ color: 'rgba(209, 211, 212)', borderColor: 'rgba(209, 211, 212)', padding: '0 16px' }"
        >其他账号</van-divider>
        <span class="line line02"></span>
      </div>
      <ul class="qq">
        <li>
          <a href="#">
            <img src="../assets/images/home/111.png" alt />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/home/ee.png" alt />
          </a>
        </li>
      </ul>
      <p class="login-footer">
        登录即代表您已同意
        <a href="#" style="color:rgba(73, 178, 249)">用户隐私政策</a>
      </p>
    </div>
    <div class="footer">copyright © 2005-2019齐家Jia.com版权所有</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { setCookie, getCookie } from "../util/util.js";
export default {
  name: "login",
  data: function() {
    return {
      tel: "", //手机号码
      code: [
        {
          img: require("../assets/images/home/code.jpg"),
          value: "8P39"
        },
        {
          img: require("../assets/images/home/code2.jpg"),
          value: "DVGB"
        },
        {
          img: require("../assets/images/home/code3.jpg"),
          value: "FSGH"
        }
      ], //存储的验证码的图片
      imgCode: 0,
      userCode: "", //用户输入的这个验证码的值
      num: "", //短信校验码
      username: "", //用户名
      pwd: "", //密码
      isshow: true,
      iscoming: false,
      ccode: "", //六位数的随机数
      codes: "", //
      Dphone: false, //发送验证码背景
      computedTime: 0 //倒计时
    };
  },
  methods: {
    forgetpwd() {
      this.$router.push("/findpwd");
    },
    registerfast() {
      this.$router.push("/register");
    },
    change() {
      this.imgCode++;
      if (this.imgCode > this.code.length - 1) {
        this.imgCode = 0;
      }
    },
    submitin() {
      if (this.isshow) {
        let telreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码的
        //快速登录的方式
        if (this.tel.length == 0) {
          Toast({
            message: "手机号不能为空"
          });
          return;
        } else if (!telreg.test(this.tel)) {
          Toast({
            message: "手机号码输入不正确，请重新输入"
          });
          return;
        } else if (this.userCode == "") {
          Toast({
            message: "验证码不能为空"
          });
          return;
        } else if (this.userCode != this.code[this.imgCode].value) {
          Toast({
            message: "验证码输入错误"
          });
          return;
        } else if (this.num.length == 0) {
          Toast({
            message: "短信校验码不能为空"
          });
          return;
        } else if (this.num != this.ccode) {
          Toast({
            message: "短信码有误，请重新输入"
          });
        } else {
          sessionStorage.setItem("uname", this.tel);
          this.$router.push({ path: "/home/recommend" });
        }
        //齐家账号登录的方式
      } else {
        // let userreg = /^[a-zA-Z0-9_-]{4,16}$/; //用户名（4到16位，字母数字下划线，减号）
        // let emailreg = /^[\w\-]+@[a-zA-Z\d\-]+(\.[a-zA-Z]{2,8}){1,2}$/; //邮箱的正则
        let telreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码的
        var pwdreg = /^[a-zA-Z0-9]{6,16}$/; //密码长度为6-16位数由数字或字母组成

        // if (this.username.length == 0) {
        //   Toast({
        //     message: "用户名不能为空"
        //   });
        //   return;
        // }
        // if (userreg.test(this.username) === true) {
        //   return true;
        // }
        // if (emailreg.test(this.username) === true) {
        //   return true;
        // } else {
        //   Toast({
        //     message: "用户名输入有误，请重新输入"
        //   });
        //   return false;
        // }
        if (this.username == "") {
          Toast({
            message: "用户名不能为空"
          });
          return false;
        } else if (!pwdreg.test(this.username)) {
          Toast({
            message: "用户名错误"
          });
          return false;
        } else if (this.pwd.length == 0) {
          Toast({
            message: "密码不能为空"
          });
          return false;
        } else if (!pwdreg.test(this.pwd)) {
          Toast({
            message: "密码输入有误，请重新输入"
          });
          return false;
        } else {
          console.log(1);
          this.tel=this.username
          sessionStorage.setItem("uname", this.tel);
          this.$router.push({ path: "/home/recommend" });
        }
      }
    },
    clicklogin() {
      // console.log("快速登录");
      this.isshow = true;
      this.iscoming = false;
    },
    clickbtn() {
      // console.log("齐家账号登录");
      this.isshow = false;
      this.iscoming = true;
    },
    goback() {
      // console.log("返回了");
      this.$router.go(-1);
    },
    //随机数的短信验证码
    generatedCode() {
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let code = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 9.9);
        code += random[index];
      }
      this.ccode = code;
    },
    // // 判断验证码是否输入准确
    // checkCode() {
    //   if (this.tel && this.ccode != "" && this.ccode == this.num) {
    //     sessionStorage.setItem("phone", this.tel);
    //     this.$router.push({ path: "/home" });
    //   } else {
    //     Toast({
    //       message: "手机验证码输入有误，请重新输入"
    //     });
    //   }
    // },

    //发送短信的函数
    getcode() {
      let telregs = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码的
      if (this.tel.length == 0) {
        Toast({
          message: "手机号不能为空"
        });
        return;
      } else if (!telregs.test(this.tel)) {
        Toast({
          message: "手机号码输入不正确，请重新输入"
        });
        return;
      } else if (this.userCode == "") {
        Toast({
          message: "验证码不能为空"
        });
        return;
      } else if (this.userCode != this.code[this.imgCode].value) {
        Toast({
          message: "验证码输入错误"
        });
        return;
      } else {
        this.generatedCode();
        //请求验证码
        let params = new URLSearchParams();
        params.append("phone", this.tel);
        params.append("code", this.ccode);
        this.$axios
          .post("http://localhost:3001/sedsms", params)

          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });

        // this.$axios({
        //   method: "post",
        //   url: "/api/sedsms",
        //   data: {
        //     phone: this.tel,
        //     code: this.ccode
        //   }
        // })
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        this.Dphone = true;
        //进入倒计时的状态
        if (this.computedTime == 0) {
          this.computedTime = 20;
          var IntervalId = setInterval(() => {
            this.computedTime--;
            if (this.computedTime <= 0) {
              clearInterval(IntervalId); //关闭定时器
              this.Dphone = false;
            }
          }, 1000);
        }
      }
    }
    // Toast({
    //   message: "发送成功"
    // });
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/css/myfont/iconfont.css");
@import url("../assets/css/login/login.css");
</style>