/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../views/Landing'
import Login from '../views/Login'
import Register from '../views/Register'
import UserBoard from '../views/UserBoard'
import AdminBoard from '../views/AdminBoard'
import About from '../views/About'

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        guest: true
      }
    },
    {
        path: "/dashboard",
        name: "userboard",
        component: UserBoard,
        meta: {
        requiresAuth: true
      }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {
          requiresAuth: true
        }
      },
    {
      path: "/admin",
      name: "admin",
      component: AdminBoard,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: "userboard" })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "userboard" })
    }
  } else {
    next();
  }
});

export default router
