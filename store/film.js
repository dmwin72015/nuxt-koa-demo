// import axios from 'axios'
import axios from 'axios'

export const state = () => ({
  film: {
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
    resolution: '',
    size: '',
    size_unit: '',
    types: [],
    extension: '',
    subtitle: '',
    download_url: ''
  }
})

export const mutations = {
  SET_NAME_CN(state, value) {
    state.film.name_cn = value
  },
  SET_NAME_EN(state, value) {
    state.film.name_en = value
  },
  SET_FILM(state, value) {
    state.film = value
  }
};

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
  }
};


export const getters = {
  generalForm: state => state.film
}
