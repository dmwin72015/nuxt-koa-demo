// 通用模板2，电影主题 ,使用Element-UI
<template>
  <div id="container" :class="{'mini-menu':isCollapse}">
    <page-side></page-side>
    <nuxt class="main-content" />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import pageSide from "~/components/common/side";
export default {
  name: "default_template_movie",
  data() {
    return {};
  },
  creatd() {
    console.log(this.$store);
  },
  computed: {
    ...mapState({
      isCollapse: state => state.menu.isCollapse
    })
  },
  methods: {
    toggleShow() {
      this.toggleCollapse(!this.isCollapse);
    },
    ...mapMutations({
      toggleCollapse: "menu/SET_COLLAPSE"
    })
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/mixins.scss";
@import "~assets/sass/variables.scss";
#container {
  position: relative;
  height: 100%;
  display: flex;
  &.mini-menu {
    .left-panel {
      width: $nav-min-width;
    }
    .main-content {
      margin-left: $nav-min-width;
    }
    .user-info {
      .user-name {
        opacity: 0;
        display: none;
      }
      .user-fns {
        display: none;
      }
      .item {
        margin-left: 0;
      }
    }
    .toggle-miniMenu .el-icon-back {
      transform: rotate(180deg);
    }
  }
}
.main-content {
  @include trans();
  margin-left: $nav-max-width;
  // padding-right: 20px;
  flex: 1;
}
</style>