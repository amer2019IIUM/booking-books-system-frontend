
const state = {
    authStatus: false,
    authenticatedUserId: null,
    user: null,
    token: localStorage.getItem("myapptoken") || null
};

const getters = {
    authenticatedUserId: state => state.authenticatedUserId,
    authStatus: state => state.authStatus,
    user: state => state.user,
};

const actions = {
    async login({ commit }, token) {
        commit('LOGIN', token);
        await localStorage.setItem('myapptoken', "Bearer " + token)
        window.location.reload()
    },
    async currentUser({ commit }, userData) {
        await commit('CURRENT_USER', userData);
        if (userData) {
            commit('IS_AUTH');
            localStorage.setItem('authStatus', true)
        }
        else {
            localStorage.setItem('authStatus', false)

        }
    },

    async logout({ commit }) {
        commit('LOGOUT');
        localStorage.clear()
        sessionStorage.clear()
        localStorage.setItem('authStatus', false)
        window.location.reload()
    }
};
const mutations = {
    CURRENT_USER(state, payload) {
        state.authenticatedUserId = payload.user.id;
        state.user = payload.user;
    },
    IS_AUTH(state,) {
        state.authStatus = true
    },

    LOGIN(state, payload) {
        state.token = payload;
    },

    LOGOUT(state) {
        state.authStatus = false;
        state.authenticatedUserId = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}