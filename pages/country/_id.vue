<template>
  <component :is="currentView" :data="list"></component>
</template>

<script>
import { mapState } from "vuex";
import list from "../../components/admin/country_list.vue";
import add from "../../components/admin/country_add.vue";

export default {
  data() {
    return {
      currentView: "list"
    };
  },
  computed: {
    ...mapState({
      list: state => state.country.list
    })
  },
  components: {
    list,
    add
  },
  validate({ params }) {
    // console.log("validate >>>>> " + Date.now(), params);
    return /^[\w\d]+$/.test(params.action);
  },
  async fetch({ store }) {
    await store.dispatch("country/GET_COUNTRIES");
  },
  async asyncData({ params, env, error, app }) {
    return {
      currentView: params.id || "list"
    };
  }
};
</script>

<style lang="scss">
.country-list {
  span {
    display: inline-block;
    padding: 0.5em 1em;
    margin-right: 10px;
  }
}
</style>
