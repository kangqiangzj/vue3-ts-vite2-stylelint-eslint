/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-15 14:12:13
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 14:31:26
 * @FilePath: \website\src\main.ts
 */
import { createApp } from 'vue'
import { setupStore } from './store' // 状态管理
import router, { setupRouter } from './router' // 路由

import App from './App.vue'
import SvgIcon from './components/SvgIcon/index.vue'

import './styles/index.scss'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

setupRouter(app) // 引入路由

setupStore(app) // 引入状态管理

app.mount('#app')
