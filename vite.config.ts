/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-15 14:12:13
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 14:37:47
 * @FilePath: \website\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import { svgBuilder } from './src/plugins/svgBuilder'

// element-plus自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir: string) => path.join(__dirname, dir)
// 环境变量 https://blog.csdn.net/chendf__/article/details/115676683
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        [svgBuilder('./src/assets/icons/svg/')], // 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
            comps: resolve('src/components'),
            apis: resolve('src/apis'),
            views: resolve('src/views'),
            store: resolve('src/store'),
            utils: resolve('src/utils'),
            routes: resolve('src/routes'),
            styles: resolve('src/styles'),
        },
    },
    server: {
    // 服务器主机名
        host: '',
        // 端口号
        port: 3088,
        // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        // 服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
        open: false,
        // 自定义代理规则
        proxy: {
            // 选项写法
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
