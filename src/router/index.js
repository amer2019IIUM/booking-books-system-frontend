import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import ShowBook from '../pages/ShowBook.vue'
import Login from '../pages/auth/Login.vue'
import Signup from '../pages/auth/Signup.vue'
import Dashboard from '../pages/dashboard/Dashboard.vue'
import UserProfile from '../pages/UserProfile.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:id',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
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


// eslint-disable-next-line no-unused-vars


////Authentication Route validations
router.beforeEach((to, from, next) => {
  let isAuth = localStorage.getItem("authStatus");
  // eslint-disable-next-line no-console
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuth !== "true") {
      next({
        name: "Login"
      });
    }
    else {
      next();
    }
  }
  else {
    next();
  }
})
export default router;
