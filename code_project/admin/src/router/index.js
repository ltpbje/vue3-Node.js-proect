import { createRouter, createWebHashHistory } from "vue-router"
import Login from "@/views/Login.vue"
import MainBox from "@/views/MainBox.vue"
import RoutesConfig from "./config"
import store from "@/store"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next()
  } else {
    //如果授权（已经登录过了））next()
    //未授权，重定向到login
    if (!localStorage.getItem("token")) {
      next({
        path: "/login",
      })
    } else {
      if (!store.state.isGetterRouter) {
        ConfigRouter()
        // next()
        next({
          path: to.fullPath,
        })
      } else {
        next()
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  // to and from are both route objects.
  NProgress.done()
  
})
// ConfigRouter()
function ConfigRouter() {
  RoutesConfig.forEach((item) => {
    router.addRoute("mainbox", item)
  })
  store.commit("changeGetterRouter", true)
}

export default router
