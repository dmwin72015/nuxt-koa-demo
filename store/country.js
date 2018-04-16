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
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    console.log("来自服务端渲染", req);
  },
  GET_COUNTRIES({
    state,
    commit
  }, options) {
    let {
      ctx: {
        isServer,
        isClient
      }
    } = options;
    axios
      .get("http://127.0.0.1:9800/api/v1/country")
      .then(resp => {
        console.log("国家列表", resp);
        if (resp && resp.status === 200) {
          commit("SET_COUNTRIES_DATA", resp.data.data);
        }
      })
      .catch(err => {
        console.log(err)
        // throw err;
      });
  }
};

// getters
export const getters = {};
