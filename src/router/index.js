import { createRouter, createWebHashHistory } from "vue-router";
//公共结构（组件）：
import Layout from "@/components/Layout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页：
    {
      path: "/login",
      alias: '/',
      name: "login",
      component: () => import('@/views/Login.vue'),
    },
    // 注册页：
    {
      path: "/register",
      name: "register",
      component: () => import('@/views/Register.vue'),
    },
    // 主页：
    {
      path: "/homepage",
      name: "Homepage",
      component: Layout,
      children:[
        {
          path:'list',
          name:'HomeList',
          component:()=>import('@/views/HomePage/List.vue')
        }
      ]
    },
   
  ],
});

export default router;
