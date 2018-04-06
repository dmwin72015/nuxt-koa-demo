<template>
  <div class="wraper">
    <div class="header" :class="{'fix-top' : scrollFlag}">
      <el-breadcrumb separator="/" class="admin-top-nav">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/movie">影片管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>添加</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary">保存</el-button>
      <el-button>取消</el-button>
    </div>
    <nuxt-child :key="$route.params.action" />
  </div>
</template>
<script>
import { listScroll } from "@/plugins/scrollEvent";
export default {
  data() {
    return {
      title: "后台-电影管理",
      scrollFlag: false
    };
  },
  created() {
    if (process.browser) {
      listScroll(top => {
        this.scrollFlag = top > 0;
      });
    }
  },
  methods: {
    submit() {
      console.log(this.form);
    }
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  position: relative;
  padding-top: 75px;
}
.header {
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  text-align: right;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  .fix-top {
    left: 240px;
    top: 0;
    right: 0;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
}
.admin-top-nav {
  float: left;
  line-height: 60px;
}
</style>