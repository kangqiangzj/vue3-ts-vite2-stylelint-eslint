/*
 * @Description: 接口声明文件
 * @Author: zhangjie
 * @Date: 2022-02-16 08:51:10
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-16 16:24:09
 * @FilePath: \website\src\store\interface\index.ts
 */
export interface App {
  count: 0;
}

//布局配置
export interface ThemeConfigState {
  globalTitle: string;
  layout: string;
  menuBar: string;
  animation: string;
  isCollapse: boolean;
  isShowLogo: boolean;
}

//主接口（顶级类型声明）
export interface RootStateTypes {
  themeConfig: ThemeConfigState;
  app: App;
}
