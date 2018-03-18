<template>
  <div id="app">
    <div id="top">
      <mobile-topnav></mobile-topnav>
    </div>
    <div id="container">
      <page-side></page-side>
      <div id="content">
        <page-header></page-header>
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import pageHeader from '~/components/common/header.vue';
import mobileTopnav from '~/components/common/m_topnav.vue';
import pageSide from '~/components/common/side.vue';

export default {
  name: 'app',

  components: {
    pageHeader,
    mobileTopnav,
    pageSide
  }
}
</script>
<style lang="scss" scoped>
#container {
  padding-left: 224px;
}
</style>