// 通用模板2，电影主题 ,使用Element-UI
<template>
  <div id="container">
    <h3>标题</h3>
    <nuxt/>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
export default {};
</script>
<style lang="scss" scoped>
#container {
  padding-left: 224px;
}
</style>