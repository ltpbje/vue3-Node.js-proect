import Home from "@/views/home/Home.vue"
import Center from "@/views/center/Center.vue"
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },

  {
    path: "/center",
    name: "center",
    component: Center,
  },
]

export default routes
