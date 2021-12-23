
const state = {
    userData: [],
};

const getters = {
    userData: state => state.userData,
};

const actions = {
    async getUserData({ commit }, data) {
        await commit('GET_USER_DATA', data);
    },
};
const mutations = {
    GET_USER_DATA(state, payload) {
        state.userData = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}