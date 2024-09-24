import Home from "@/views/home/Home.vue"
import Center from "@/views/center/Center.vue"
import UserAdd from "@/views/user-mange/UserAdd.vue"
import UserList from "@/views/user-mange/UserList.vue"
import NewsAdd from "@/views/news-mange/NewsAdd.vue"
import NewsList from "@/views/news-mange/NewsList.vue"
import ProductAdd from "@/views/product-mange/ProductAdd.vue"
import ProductList from "@/views/product-mange/ProductList.vue"
import NotFound from "@/views/notfound/NotFound.vue"
import store from "@/store"
const routes = [
  {
    path: "/index",
    component: Home,
  },
  {
    path: "/center",
    component: Center,
  },
  {
    path: "/user-manage/adduser",
    component: UserAdd,
    beforeEnter: (to, from, next) => {
      // 路由守卫
        // 路由进入前的操作 只有管理员可以进入该页面
      if (store.state.userInfo.role === 1) {
        next()
      } 
      },
  },
  {
    path: "/user-manage/userlist",
    component: UserList,
    beforeEnter: (to, from, next) => {
      // 路由守卫
        // 路由进入前的操作 只有管理员可以进入该页面
      if (store.state.userInfo.role === 1) {
        next()
      } 
      },
  },

  {
    path: "/news-manage/newsadd",
    component: NewsAdd,
  },
  {
    path: "/news-manage/newslist",
    component: NewsList,
  },

  {
    path: "/product-manage/addproduct",
    component: ProductAdd,
  },
  {
    path: "/product-manage/productlist",
    component: ProductList,
  },
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
]

export default routes
