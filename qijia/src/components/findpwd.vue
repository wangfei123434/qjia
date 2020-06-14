<template>
  <div class="findpwd">
    <div class="top">
      <a href="#" class="iconfont icon-fanhuitubiao back" @click="goback"></a>
      <a href="#">找回密码</a>
    </div>
    <div class="content">
      <form action class="form01">
        <input type="text" placeholder="请输入手机号" v-model="tel" />
      </form>
      <form action="#" class="form01">
        <div class="div01">
          <span class="span01">
            <input type="text" placeholder="验证码" v-model="userCode" />
          </span>
        </div>
        <div class="div02">
          <img :src="code[this.imgCode].img" alt class="code" />
          <a href="#" @click.prevent="change">换一张</a>
        </div>
      </form>
      <form action class="form01">
        <input type="text" placeholder="短信码" v-model="num" />
        <a
          href="#"
          @click.prevent="getcode"
          v-bind:disabled="Dphone"
          :class="{right_number:Dphone }"
          v-text="computedTime>0?`重新获取${computedTime}s`:'获取验证码'"
        >获取短信码</a>
      </form>
      <p class="word">您的验证码以短信或电话的方式发送给您,请注意查收</p>
      <div class="btn">
        <input type="submit" @click="submitin" value="确认" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "findpwd",
  data: function() {
    return {
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
      ],
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
      computedTime: 0, //倒计时
      isAgree: false,
      tel: ""
    };
  },
  methods: {
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
    change() {
      console.log("有换一张了");
      this.imgCode++;
      if (this.imgCode > this.code.length - 1) {
        this.imgCode = 0;
      }
    },
    goback() {
      console.log("返回了");
      this.$router.go(-1);
    },
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
    },
    submitin() {
      console.log("登录了");
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
        sessionStorage.setItem("phone", this.tel);
        this.$router.push({ path: "/home/recommend" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/css/findpwd/findpwd.css");
</style>