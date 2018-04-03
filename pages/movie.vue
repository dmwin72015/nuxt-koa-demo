<template>
    <div>
      <h3>电影添加</h3> 
      <el-form ref="'film'" label-width="100px" v-model="form">
        <el-form-item label="中文名字">
          <el-input v-model="form.name_cn"></el-input>
        </el-form-item>
        <el-form-item label="英文名字">
          <el-input v-model="form.name_en"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  @click="submit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  layout: "default_2",
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.$store);
  },
  computed: {
    name_cn: {
      get() {
        return this.$store.state.film.name_cn;
      },
      set(value) {
        this.$store.commit("film/SET_NAME_CN", value);
      }
    },
    name_en: {
      get() {
        return this.$store.state.film.name_en;
      },
      set(value) {
        this.$store.commit("film/SET_NAME_EN", value);
      }
    },
    ...mapState({
      user_file: "user.film"
    }),
    ...mapGetters("film", {
      form: "generalForm"
    })
  },
  methods: {
    submit() {
      console.log(this.$store);
      console.log(this.user_file);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
