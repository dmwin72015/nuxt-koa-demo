// import axios from 'axios'
import axios from 'axios';
import filmMod from './model/film';
import { createMutations, createState } from '../tools/util'

export const state = () => (createState(filmMod));

export const mutations = createMutations(filmMod)

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
