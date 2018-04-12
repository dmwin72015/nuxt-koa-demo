import axios from "axios";
export const state = () => ({
  page: 1,
  list: []
});

// mutations
export const mutations = {
  SET_COLLAPSE(state, value) {
    state.isCollapse = value;
  },
  SET_COUNTRIES_DATA(state, list) {
    state.list = list;
  }
};

// actions
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log("来自服务端渲染", req);
  },
  GET_COUNTRIES({ state, commit }, options) {
    let { ctx: { isServer, isClient } } = options;
    if (isClient) {
      axios
        .get("/api/v1/country")
        .then(resp => {
          console.log("国家列表", resp);
          if (resp && resp.status === 200) {
            commit("SET_COUNTRIES_DATA", resp.data.data);
          }
        })
        .catch(err => {
          const { response, request } = err;
          console.log(Object.keys(err));
          console.log(
            "服务器错误.....>>>>>",
            response.status,
            response.statusText
          );
          throw err;
        });
    } else if (isServer) {
      // 执行server逻辑处理
    }
  }
};

// getters
export const getters = {};
