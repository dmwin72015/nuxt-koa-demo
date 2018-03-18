import axios from 'axios'

export const state = () => ({
  visits: [],
  headers: {},
  responseData: {}
})

export const mutations = {
  ADD_VISIT(state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },

  ADD_HEADERS(state, headers = {}) {
    state.headers = headers;
  },

  SHOW_RESPONSE(state, data = {}) {
    state.responseData = data;
  }
};

export const actions = {

  GET_APi({ commit, state, dispatch }) {
    axios.get('/v1/api')
      .then(resp => {
        commit('SHOW_RESPONSE', resp.data);
      })
      .catch((err) => {
        commit('SHOW_RESPONSE', { msg: '错误' });
        console.error(err);
      })
  }

  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('GET_APi')
  // }
}
