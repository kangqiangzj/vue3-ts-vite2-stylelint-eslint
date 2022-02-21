<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 09:28:34
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 15:38:25
 * @FilePath: \website\src\layout\main\index.vue
-->
<script lang="ts" setup>
import { getCurrentInstance, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'store/index'
import Aside from '../component/aside.vue'

const testStr = '3121'
const head = ref(0)
</script>

<template>
    <el-container class="layout-container test">
        <Aside />
        <h1>{{ head }}</h1>
        <router-view></router-view>
    </el-container>
</template>

<style scoped>
.test {
    color: #ffffff;
}
</style>
