<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      测试接口数据
    </h1>
    <h3>
      <table>
        <tr v-for="(val, key) in responseData">
            <td>
              {{key}}
            </td>
            <td>
              {{JSON.stringify(val)}}
            </td>
        </tr>
      </table>
    </h3>
    <nuxt-link class="button" to="/">
      首页
    </nuxt-link>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    responseData() {
      return this.$store.state.responseData
    }
  },
  methods: {
    ...mapActions({
      'test': 'GET_APi'
    })
  },
  created() {
    this.test();
  }
}

</script>
<style scoped>
.title {
  margin: 50px 0;
}

</style>
