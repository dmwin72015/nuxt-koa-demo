// import axios from 'axios'
import axios from "axios";

export const state = () => ({
  name: "",
  address: "",
  age: "",
  job: "",
  film: "重名"
});

export const mutations = {
  setName: function(state, name) {
    state.name = name;
  },
  setAddress: function(state, address) {
    state.address = address;
  },
  setAge: function(state, age) {
    state.age = age;
  },
  setJob: function(state, job) {
    state.job = job;
  }
};

export const actions = {
  // 保存
  SAVE_USER({ commit, state }, user) {
    axios
      .post("/api/v1/user", {
        name: state.name,
        address: state.address,
        age: state.age,
        job: state.job
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.error(err);
      });
  },
  // 获取用户信息

  GET_USER({ commit, state }) {
    setTimeout(() => {
      commit("setName", "张三");
    }, 3000);
  }
};
