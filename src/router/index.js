import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import ShowBook from '../pages/ShowBook.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/book/:id',
    name: 'ShowBook',
    component: ShowBook,
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
