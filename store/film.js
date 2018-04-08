// import axios from 'axios'
import axios from 'axios';
import {
  createMutations,
  createState
} from '../tools/util'
const filmMod = {
  name_cn: '',
  name_en: '',
  release_date: '',
  country: '',
  language: '',
  imdb_score: '',
  storyline: '',
  director: '',
  writers: '',
  stars: '',
  runtime: '',
  resolution: '', // 文件分辨率
  size: '',
  size_unit: '',
  types: '',
  extension: '',
  subtitle: '',
  download_url: ''
}


export const state = () => ({
  ...createState(filmMod),
  list: []
});

export const mutations = {
  ...createMutations(filmMod),

  SET_FILM_LIST(state, data) {
    state.list = data;
  }
}

export const actions = {
  // 保存
  SAVE_FILM({
    commit,
    state
  }, user) {
    axios.post('/api/v1/film', {
      name: state.name,
      address: state.address,
      age: state.age,
      job: state.job
    }).then(resp => {
      console.log(resp);
    }).catch(err => {
      console.error(err);
    })
  },

  // 获取film列表
  GET_FILMS({
    state,
    commit
  }) {
    axios.get('/api/v1/film')
      .then(resp => {
        console.log(resp)
      }).catch(err => {
        throw err;
      });
  }
};

export const getters = {
  generalForm: state => state.film
}