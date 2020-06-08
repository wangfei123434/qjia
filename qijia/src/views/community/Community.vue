<template>
  <div class="community">
    <div class="top">
      <div :class="{active:currIndex==0}" @click="currIndex=0">
        <router-link to="/community/forum" >论坛</router-link>
      </div>
      <div :class="{active:currIndex==1}" @click="currIndex=1">
        <router-link to="/community/question">问答</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "community",
  data: function() {
    return {
      currIndex: 0,
    };
  },
  mounted() {
    this.fn();
  },
  methods: {
    fn() {
    }
  }
};
</script>
<style lang="less" scoped>
@import url(../../assets/css/community.less);
</style>