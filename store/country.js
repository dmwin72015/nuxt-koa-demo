import request from "../tools/axios_utils";
import axios from "axios";

export const state = () => ({
  page: 1,
  list: []
});

// mutations
export const mutations = {
  SET_COUNTRIES_DATA(state, list) {
    state.list = list;
  }
};

// actions
export const actions = {
  async GET_COUNTRIES({ state, commit }) {
    const data = await request
      .get("/v1/country")
      .then(resp => {
        if (resp && resp.status === 200) {
          return resp.data.data;
        }
      })
      .catch(err => {
        const { response, request } = err;
        console.error(response);
        throw err;
      });
    commit("SET_COUNTRIES_DATA", data);
  }
};

// getters
export const getters = {};
