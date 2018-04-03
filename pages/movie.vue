<template>
    <div>
      <h3>电影添加</h3> 
      <el-form ref="'film'" label-width="100px">
        <el-form-item label="中文名字">
          <el-input v-model="name_cn"></el-input>
        </el-form-item>
        <el-form-item label="英文名字">
          <el-input v-model="name_en"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  @click="submit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  layout: "default_2",
  data() {
    return {
      form: {
        name_cn: "",
        name_en: ""
      }
    };
  },
  mounted() {
    console.log(this.film);
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
      film: "film",
      user_file: "user.film"
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
