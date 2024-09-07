import Home from "@/views/home/Home.vue"
import Center from "@/views/center/Center.vue"
import UserAdd from "@/views/user-mange/UserAdd.vue"
import UserList from "@/views/user-mange/UserList.vue"
import NewsAdd from "@/views/news-mange/NewsAdd.vue"
import NewsList from "@/views/news-mange/NewsList.vue"
import ProductAdd from "@/views/product-mange/ProductAdd.vue"
import ProductList from "@/views/product-mange/ProductList.vue"
import NotFound from "@/views/notfound/NotFound.vue"
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
  },
  {
    path: "/user-manage/userlist",
    component: UserList,
  },

  {
    path: "/news-manage/addnews",
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
