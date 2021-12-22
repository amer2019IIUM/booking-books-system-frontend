import { createStore, createLogger } from 'vuex';
import Book from './modules/book.js'
import Category from './modules/category.js'


export default createStore({
    modules: {
        Book,
        Category
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
