// 主菜单状态
export const state = () => ({
  isCollapse: false // 菜单是否折叠
});

export const mutations = {
  SET_COLLAPSE(state, value) {
    state.isCollapse = value;
  }
}

export const actions = {};


export const getters = {}