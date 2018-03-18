<template>
  <nav>
    <div class="toggle-side">
      <span class="toggle-btn">
          <i class="dm icon-indent-decrease"></i>
      </span>
      <span class="toggle-btn">
        &#xe905;
      </span>
    </div>
    <div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'pc-header'
}
</script>
<style scoped>
nav {
  height: 60px;
  line-height: 60px;
  flex: 1;
  position: relative;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid #d9e3ea;
  background: rgba(218, 227, 234, .24)
}
.toggle-side {
  float: left;
}
.toggle-btn {
  font-size: 24px;
}
</style>