
const state = {
    bookData: [],
};

const getters = {
    bookData: state => state.bookData,
};

const actions = {
    async getBookData({ commit }, data) {
        await commit('GET_Book_DATA', data);
    },
};
const mutations = {
    GET_Book_DATA(state, payload) {
        state.bookData = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}