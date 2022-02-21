/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-15 16:18:35
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 10:28:00
 * @FilePath: \website\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';
const Layout = () => import('@/layout/index.vue');

const routerHasHistory = createWebHashHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const router = createRouter({
  history: routerHasHistory,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          name: "home" ,
          component: () => import('views/home/index.vue'),
        },
      ],
    },
  ],
});

// 删除/重置路由
export function resetRoute(): void {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
