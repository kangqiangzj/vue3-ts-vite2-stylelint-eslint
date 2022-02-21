/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 08:44:44
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-16 08:58:54
 * @FilePath: \website\src\store\modules\app.ts
 */
import { Module } from 'vuex';
import { App, RootStateTypes } from '../interface/index';

export interface State {
  count: 0;
}

const app: Module<App, RootStateTypes> = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: App) {
      state.count++;
    },
  },
};

export default app;
