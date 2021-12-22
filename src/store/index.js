import { createStore, createLogger } from 'vuex';
import Book from './modules/book.js'


export default createStore({
    modules: {
        Book,
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
    , plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})
