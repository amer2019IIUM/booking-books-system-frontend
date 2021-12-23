import { createStore, createLogger } from 'vuex';
import Book from './modules/book.js'
import Category from './modules/category.js'
import Auth from './Auth'


export default createStore({
    modules: {
        Book,
        Category,
        Auth
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
