import axios from 'axios'
// state
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
    state.list = list
  }
}

// actions
export const actions = {
  GET_COUNTRIES({
    state,
    commit
  }, options) {
    console.log("执行store action ：：：： GET_COUNTRIES", Date.now())
    axios.get('/api/v1/country')
      .then(resp => {
        console.log("国家列表", resp)
        if (resp && resp.status === 200) {
          commit('SET_COUNTRIES_DATA', resp.data.data)
        }
      }).catch(err => {
        console.log("服务器错误", err)
        throw err;
      });
  }
};

// getters
export const getters = {}