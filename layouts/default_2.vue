// 通用模板2，电影主题 ,使用Element-UI
<template>
  <div id="container" :class="{'mini-menu':isCollapse}">
    <div class="left-panel">
      <div class="user-info">
        <div class="user-avatar">
          <img src="~/assets/img/admin/avatar.jpg" alt="" class="avatar-img">
          <span class="user-name">
            董敏
          </span>
        </div>
        <div class="user-fns">
          <el-badge :value="12" class="item">
            <el-button type="info" icon="el-icon-message" circle class="user-message"></el-button>
          </el-badge>
          <el-badge class="item">
            <el-button type="info" icon="el-icon-message" circle class="user-message"></el-button>
          </el-badge>
          <el-badge class="item">
            <el-button type="info" icon="el-icon-setting" circle class="user-message"></el-button>
          </el-badge>
        </div>
        <div class="toggle-miniMenu" @click="toggleShow">
          <i class="el-icon-back" :class="{'go' :isCollapse }"></i>
        </div>
      </div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo main-menu" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">影片管理</span>
          </template>
          <el-menu-item-group>
            <nuxt-link to="/movie">
              <el-menu-item index="1-1">电影</el-menu-item>
            </nuxt-link>
            <nuxt-link to="/movie/add">
              <el-menu-item index="1-1">添加</el-menu-item>
            </nuxt-link>
          </el-menu-item-group>
          <el-menu-item-group title="美剧">
            <span slot="title">美剧</span>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </div>
    <nuxt class="main-content" />
  </div>
</template>
<script>
export default {
  name: "default_template_movie",
  data() {
    return {
      showToggleMenuBtn: false,
      isCollapse: false
    };
  },
  methods: {
    toggleShow() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/sass/mixins.scss";
#container {
  position: relative;
  height: 100%;

  &.mini-menu {
    .left-panel {
      width: 65px;
    }
    .main-content {
      margin-left: 64px;
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
  }
}
.main-content {
  @include trans();
  margin-left: 240px;
  padding-right: 20px;
}
.left-panel {
  position: absolute;
  width: 240px;
  height: 100%;
  left: 0;
  top: 0;
  border-right: solid 1px #e6e6e6;
  @include trans();
  .el-menu {
    border-right: none;
  }
}

.main-menu {
  height: 100%;
}

.nuxt-link-active {
  display: block;
  text-decoration: none;
  font-weight: bold;
  background: #f2f2f2;
}

.user-info {
  position: relative;
  padding: 20px 0;
  background: #fff;
  margin-bottom: 5px;
  .user-avatar {
    text-align: center;
    overflow: hidden;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .avatar-img,
  .user-name {
    display: inline-block;
    vertical-align: middle;
  }
  .user-name {
    padding: 0 10px;
    color: #222;
    font-size: 24px;
  }
  .user-fns {
    padding-top: 20px;
    text-align: center;
    .item {
      margin-left: 15px;
    }
    .item:first-child {
      margin-left: 0;
    }
  }

  .user-message {
    background: #f2f2f2;
    color: #666;
    border-color: #f2f2f2;

    &:hover {
      background: rgb(108, 177, 245);
      color: #fff;
      border-color: rgb(108, 177, 245);
    }
  }

  .toggle-miniMenu {
    position: absolute;
    top: 10px;
    font-size: 20px;
    width: 40px;
    height: 40px;
    left: -40px;
    line-height: 40px;
    text-align: center;
    background: rgb(108, 177, 245);
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: rgb(76, 151, 226);
    }
    transition: all 0.2s;
    .el-icon-back{
      @include trans();
    }
    .go {
      transform: rotate(180deg);
    }
  }

  &:hover {
    .toggle-miniMenu {
      left: 0;
    }
  }
}
</style>