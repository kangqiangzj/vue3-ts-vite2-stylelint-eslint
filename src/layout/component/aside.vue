<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 08:49:57
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 12:11:08
 * @FilePath: \website\src\layout\component\aside.vue
-->
<script lang="ts" setup>
import { ref, toRefs, reactive, computed, watch, getCurrentInstance, onBeforeMount, onUnmounted } from 'vue'
import { useStore } from 'store/index'
import Logo from './logo/index.vue'
import SubBar from './navMenu/subBar.vue'

const store = useStore()
const state: any = reactive({
    menuList: [
        {
            meta: {
                auth: ['admin', 'test'],
                icon: 'iconfont el-icon-menu',
                isAffix: true,
                isHide: false,
                isIframe: false,
                isKeepAlive: true,
                title: '首页',
                index: '1',
            },
            name: 'home',
            path: '/home',
        },
        {
            meta: {
                auth: ['admin', 'test'],
                icon: 'iconfont el-icon-s-grid',
                isAffix: true,
                isHide: false,
                isIframe: false,
                isKeepAlive: true,
                title: '首页2',
                index: '2',
            },
            name: 'home2',
            path: '/home2',
        },
    ],
    clientWidth: '1000',
})
const setShowLogo = ref<boolean>(true)
const setCollapseWidth = ref<string>('layout-aside-width-default')
// 获取布局配置信息
const getThemeConfig = computed(() => store.state.themeConfig)
// 页面加载前
onBeforeMount(() => {})
// 页面卸载时
onUnmounted(() => {})
</script>
<template>
    <el-aside v-if="state.clientWidth > 900" class="layout-aside" :class="setCollapseWidth">
        <Logo v-if="setShowLogo" />
        <el-scrollbar ref="layoutAsideScrollbarRef" class="flex-auto">
            <SubBar :menu-list="state.menuList" :class="setCollapseWidth" />
        </el-scrollbar>
    </el-aside>
    <el-drawer
        v-else
        v-model="getThemeConfig.isCollapse"
        :with-header="false"
        direction="ltr"
        size="220px"
    >
        <el-aside class="layout-aside w100 h100">
            <Logo v-if="setShowLogo" />
            <el-scrollbar ref="layoutAsideScrollbarRef" class="flex-auto">
                <SubBar :menu-list="state.menuList" />
            </el-scrollbar>
        </el-aside>
    </el-drawer>
</template>
