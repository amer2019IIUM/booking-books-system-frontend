import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import ShowBook from '../pages/ShowBook.vue'
import Login from '../pages/auth/Login.vue'
import Signup from '../pages/auth/Signup.vue'
import Dashboard from '../pages/dashboard/Dashboard.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/book/:id',
    name: 'ShowBook',
    component: ShowBook,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
