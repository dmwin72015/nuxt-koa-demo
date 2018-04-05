export const createState = (obj, { bind = '' } = {}) => {
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


export const createMutations = (obj, { bind = '' } = {}) => {
  let mutations = {};
  Object.keys(obj).forEach(key => {
    let mutaKey = 'SET_' + (bind ? bind + '_' : '') + key.toUpperCase();
    mutations[mutaKey] = (state, val) => {
      bind ? (state[bind][key] = val) : (state[key] = val)
    }
  })
  return mutations;
}