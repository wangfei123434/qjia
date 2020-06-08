<template>
  <div class="login">
    <div class="top">
      <a href="#" class="iconfont icon-fanhuitubiao back"></a>
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
            <input type="text" placeholder="请输入验证码" v-model="code" />
          </span>
        </div>
        <div class="div02">
          <img src="../assets/images/home/code.jpg" alt class="code" />
          <a href="#">换一张</a>
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
          <a href="#" @click="getcode">发送短信</a>
        </div>
      </form>
    </div>
    <!-- 齐家账号 -->
    <div class="login-form" v-show="iscoming">
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
          <a href="#">换一张</a>
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
      <a href="#">立即注册</a>
      <a href="#">忘记密码</a>
    </p>
    <div class="other-login">
      <div>
        <span class="line line01"></span>
        <span class="word">其他账号登录</span>
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
export default {
  name: "login",
  data: function() {
    return {
      tel: "",
      code: "",
      num: "",
      username: "",
      pwd: "",
      isshow: true,
      iscoming: false
    };
  },
  methods: {
    submitin() {
      //   console.log("提交成功了");
      let telreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码的
      //快速登录的方式
      if (this.tel.length == 0) {
        alert("手机号码不能为空");
        return;
      } else if (!telreg.test(this.tel)) {
        alert("关联手机号码输入不正确，请重新输入");
        return;
      } else if (this.code.length == 0) {
        alert("验证码不能为空");
        return;
      } else if (this.num.length == 0) {
        return;
      } else {
        alert("提交成功");
        window.location.href = "../home/recommend";
      }

      //齐家账号登录的方式
      if (this.username.length == 0) {
        // alert("登录名不能为空");
        return;
      } else if (this.pwd.length == 0) {
        alert("密码不能为空");
        return;
      } else if (this.pwd.length != 0) {
        var pwdreg = /^[a-zA-Z0-9]{6,16}$/; //密码长度为6-16位数由数字或字母组成
        if (!pwdreg.test(this.pwd)) {
          alert("密码长度为6-16位");
          return;
        } else {
          alert("恭喜您登录成功");
          window.location.href = "../home/recommend";
        }
      }
    },
    clicklogin() {
      console.log("快速登录");
      this.isshow = true;
      this.iscoming = false;
    },
    clickbtn() {
      console.log("齐家账号登录");
      this.isshow = false;
      this.iscoming = true;
    },
    getcode() {
      console.log("发送短信了");

      let count = 5;
      let timer = null;
      function setTime(eledom) {
        //count递减
        //获取验证码变成了重新发送  ${}是读取变量
        if (count == 0) {
          clearTimeout(timer);
          $(eledom).prop("disabled", false); //当等于0的时候，解除掉禁用，又可以点击了
          $(eledom).val("获取验证码");
          count = 5; //重新还原一下，，因为第一次走完了，第二次再点，点不动，从59再开始倒计时，因为变成0的时候，下一次进来还是0
          return; //当它是0的时候，后面的代码不再执行，保持的是获取验证码
        } else {
          $(eledom).prop("disabled", true); //计时器在获取验证码的时，不可以再点，禁用
          $(eledom).val(`重新发送(${count})`);
          count--;
        }
        timer = setTimeout(function() {
          clearTimeout(timer);
          setTime(eledom);
        }, 1000);
      }

      clearTimeout(timer);
      setTime(this); //谁点击，就是谁调用 this
    }
  }
};
</script>
<style lang="less">
@import url("../assets/css/myfont/iconfont.css");
@import url("../assets/css/login/login.css");
</style>