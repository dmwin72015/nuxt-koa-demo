<template>
  <component :is="currentView" :data="list"></component>
  
</template>

<script>
import { mapState } from "vuex";
import list from '../../components/admin/country_list.vue';
import add from '../../components/admin/country_add.vue';

export default {
  data() {
    return {
      currentView: 'list'
    }
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
