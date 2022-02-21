/*
 * @Description: store
 * @Author: zhangjie
 * @Date: 2022-02-15 15:04:29
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-16 09:04:20
 * @FilePath: \website\src\store\index.ts
 */
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import type { App } from 'vue';
import { RootStateTypes } from './interface/index';
import themeConfig from './modules/themeConfig';
import app from './modules/app';
// import routesList from './modules/routesList';
// import tagsViewRoutes from './modules/tagsViewRoutes';

// InjectionKey 将store安装到Vue应用程序时提供类型,将类型传递InjectionKey给useStore方法
// 手动声明 state 类型
export interface State {
  count: number;
}

// 定义注入类型
const key: InjectionKey<Store<RootStateTypes>> = Symbol();

const store = createStore<RootStateTypes>({
  modules: {
    themeConfig,
    app,
    // routesList,
    // tagsViewRoutes
  },
});

// 将类型注入useStore，似乎无效
export function useStore() {
  return baseUseStore(key);
}

export function setupStore(app: App<Element>) {
  app.use(store, key);
}

export default store;
