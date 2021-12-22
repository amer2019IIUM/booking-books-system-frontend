
const state = {
    categoryData: [],
};

const getters = {
    categoryData: state => state.categoryData,
};

const actions = {
    async getCategoryData({ commit }, data) {
        await commit('GET_CATEGORY_DATA', data);
    },
};
const mutations = {
    GET_CATEGORY_DATA(state, payload) {
        state.categoryData = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}