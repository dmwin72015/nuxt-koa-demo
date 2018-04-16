import axios from "axios";

export const state = () => ({
  headers: {},
  responseData: {},
  session: null
});

export const mutations = {
  SET_COLLAPSE(state, value) {
    state.isCollapse = value;
  },
  SET_SESSION(state, data) {
    state.session = data;
  }
};

export const actions = {
  // 只有在store 的 index.js 才调用
  nuxtServerInit({ commit }, { req }) {
    console.log("来自服务端渲染 >>>>> nuxtServerInit >>>>>>>>>");
  },
  // tets api
  GET_APi({ commit, state, dispatch }) {
    axios
      .get("/v1/api")
      .then(resp => {
        commit("SHOW_RESPONSE", resp.data);
      })
      .catch(err => {
        commit("SHOW_RESPONSE", { msg: "错误" });
        console.error(err);
      });
  }
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('GET_APi')
  // }
};
