/*
 * @Description:
 * @Author: zhangjie
 * @Date: 2022-02-16 08:45:02
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-16 16:24:48
 * @FilePath: \website\src\store\modules\themeConfig.ts
 */
import { Module } from 'vuex';
import { ThemeConfigState, RootStateTypes } from '../interface/index';

const themeConfigModule: Module<ThemeConfigState, RootStateTypes> = {
  namespaced: true,
  state: {
    /*  --------- 界面设置  --------- */
    // 网站主标题（菜单导航、浏览器当前网页标题）
    globalTitle: 'Vue3-ElementPlus-Vite2',
    // 是否开启侧边栏 Logo
    isShowLogo: true,
    // 是否开启菜单水平折叠效果
    isCollapse: true,
    // 默认布局，可选 1、默认 defaults 2、经典 classic 3、横向 transverse 4、分栏 columns
    layout: 'defaults',
    // 默认菜单导航背景颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
    menuBar: '#545c64',
    // 默认主页面切换动画，可选 1、 slide-right 2、 slide-left 3、 opacitys
    animation: 'slide-right',
  },
  mutations: {
    // 设置布局配置
    getThemeConfig(state: any, data: object) {
      state.themeConfig = data;
    },
  },
  actions: {
    // 设置布局配置
    setThemeConfig({ commit }, data: object) {
      commit('getThemeConfig', data);
    },
  },
};

export default themeConfigModule;
