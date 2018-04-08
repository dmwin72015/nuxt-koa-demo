export const createState = (obj, {
  bind = ''
} = {}) => {
  let state = {};
  Object.keys(obj).forEach(key => {
    state[key] = '';
  })
  if (bind && typeof bind === 'string') {
    return {
      bind: state
    }
  }
  return state;
}


export const createMutations = (obj, {
  bind = ''
} = {}) => {
  let mutations = {};
  Object.keys(obj).forEach(key => {
    let mutaKey = 'SET_' + (bind ? bind + '_' : '') + key.toUpperCase();
    mutations[mutaKey] = (state, val) => {
      bind ? (state[bind][key] = val) : (state[key] = val)
    }
  })
  return mutations;
}

export const unit = ['KB', 'MB', 'GB', 'TB', 'PB'];

export const filmMod = {
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