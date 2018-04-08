<template>
  <component :is="currentView" :prop-data="list"></component>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { unit, filmMod } from "@/tools/util";
import movieAdd from "@/components/admin/movie_add.vue";
import movieList from "@/components/admin/movie_list.vue";
import movieDetail from "@/components/admin/movie_detail.vue";

export default {
  data() {
    return {};
  },
  components: {
    add: movieAdd,
    list: movieList,
    detail: movieDetail
  },
  validate({ params }) {
    return /^[\w\d]+$/.test(params.action);
  },
  fetch({ store, params }) {
    store.dispatch("film/GET_FILMS");
  },
  asyncData({ params, env, error }) {
    let data = {};
    if (!params.action) {
      data = {
        currentView: "list",
        list: []
      };
    } else {
      data = {
        currentView: params.action,
        list: []
      };
    }
    return data;
  },
  methods: {
    submit() {
      console.log(this.form);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
