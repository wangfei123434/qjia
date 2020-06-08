<template>
  <div class="list-wrap">
    <div class="item" v-for="(item,index) in list" :key="index">
      <p class="title-wrap">
        <span class="color">问</span>
        <span class="title">{{item.title}}</span>
      </p>
      <p class="content">{{item.content}}</p>
      <p class="rrd">
          <i class="icon"><img :src="item.imgsrc" alt=""></i>
          <span class="res">回答{{item.resp}}</span>
          <span class="date">·{{item.date}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "remen",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios.get("/data/社区/question.json").then(res => {
        this.list = res.data.list;
        console.log(this.list);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.list-wrap {
  .item {
    font-size: 12px;
    margin: 25/100rem;
    border-bottom: 1px solid #efefef;
    .title-wrap {
      font-size: 13px;
      .color {
        color: #fff;
        background-color: #ffa114;
        padding: 3/100rem;
        position: relative;
        top: -3/100rem;
        margin-right: 10/100rem;
      }
      .title {
        font-weight: bold;
      }
    }
    .content {
      margin: 30/100rem 0;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .rrd{
        margin-bottom: 20/100rem;
        color: #999;
        .icon{
            vertical-align: bottom;
            display: inline-block;
            width: 28/100rem;
            height: 28/100rem;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .res{
            margin: 0 16/100rem;
        }
    }
  }
}
</style>