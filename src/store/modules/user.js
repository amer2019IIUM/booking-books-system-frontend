
const state = {
    userData: [],
    userBooks: 0,
};

const getters = {
    userData: state => state.userData,
    userBooks: state => state.userBooks,
};

const actions = {
    async getUserData({ commit }, data) {
        await commit('GET_USER_DATA', data);
    },
    async bookedBooks({ commit }, data) {
        await commit('GET_USER_BOOKED_BOOKS', data);
    },
};
const mutations = {
    GET_USER_DATA(state, payload) {
        state.userData = payload
    },
    GET_USER_BOOKED_BOOKS(state, payload) {
        state.userBooks = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}