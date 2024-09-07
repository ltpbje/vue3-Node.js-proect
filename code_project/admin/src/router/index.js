import { createRouter, createWebHashHistory } from "vue-router"
import Login from "@/views/Login.vue"
import MainBox from "@/views/MainBox.vue"
import RoutesConfig from "./config"
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
RoutesConfig.forEach((item) => {
  router.addRoute("mainbox", item)
})

export default router
