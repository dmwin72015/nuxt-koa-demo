<template>
  <div>
    <form action="javascript:void(0);">
      <p>
        <label for="">姓名</label>
        <input type="text" v-model="name">
      </p>
      <p>
        <label for="">头像</label>
        <input type="text" v-model="avatar">
      </p>
      <p>
        <label for="">昵称</label>
        <input type="text" v-model="nickname">
      </p>
      <p>
        <label for="">主页</label>
        <input type="text" v-model="website">
      </p>
      <p>
        <button @click="submit">提交</button>
      </p>
    </form>
    <div>
      {{name}}
      <br/>
    </div>
  </div>
</template>
<script>
import { mapMutations , mapActions } from 'vuex';

export default {
  computed: {
    name: {
      get() {
        return this.$store.state.article.name
      },
      set(value) {
        this.$store.commit('article/setName', value)
      }
    },
    website: {
      get() {
        return this.$store.state.article.website
      },
      set(value) {
        this.$store.commit('article/setWebsite', value)
      }
    },
    avatar: {
      get() {
        return this.$store.state.article.avatar
      },
      set(value) {
        this.$store.commit('article/setAvatar', value)
      }
    },
    nickname: {
      get() {
        return this.$store.state.article.nickname
      },
      set(value) {
        this.$store.commit('article/setNickname', value)
      }
    }
  },

  methods: {
    submit() {
    	this.postUser();
    },
    ...mapActions({
      'postUser':'article/addUser'
    })
  }


}
</script>