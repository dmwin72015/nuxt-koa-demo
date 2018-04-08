<template>
  <div>
    <h3>国家列表</h3>
    <ul  class="country-list">
      <li v-for="(item , index) in list" :key="item.code"  class="country-item">
        <span>{{index}}</span>
        <span>{{item.country_code}}</span>
        <span>{{item.id}}</span>
        <span>{{item.native_name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      list: state => state.country.list
    })
  },
  validate({ params }) {
    console.log("validate >>>>> " + Date.now(), params);
    return /^[\w\d]+$/.test(params.action);
  },
  fetch({ store, params }) {
    console.log("fetch" + Date.now(), params);
    store.dispatch("country/GET_COUNTRIES");
  },
  asyncData({ params, env, error }) {
    let data = {};
    console.log("asyncData" + Date.now(), params.id);
    return data;
  }
};
</script>

<style lang="scss">
.country-list{
  span{
    display: inline-block;
    padding: 0.5em 1em;
    margin-right: 10px;
  }
}
</style>
