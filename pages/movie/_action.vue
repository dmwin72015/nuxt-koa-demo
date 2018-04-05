<template>
  <component v-bind:is="current">
  </component>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import filmMod from "@/store/model/film";
import sizeUnit from "@/store/enum/film_sizeUnit";
import movieAdd from "@/components/admin/movie_add.vue";
import movieList from "@/components/admin/movie_list.vue";
import movieDetail from "@/components/admin/movie_detail.vue";

export default {
  data() {
    return {
      current: "",
      form: filmMod,
      sizeUnit: sizeUnit,
      todo: ""
    };
  },
  components: {
    add: movieAdd,
    list: movieList,
    detail: movieDetail
  },
  validate({ params }) {
    // Must be a number
    console.log(params);
    this.current = params.action;
    console.log(this.current)
    return /^[\w\d]+$/.test(params.action);
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
