<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 16:00:29
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 12:11:44
 * @FilePath: \website\src\layout\component\navMenu\subBar.vue
-->
<template>
    <div>el-menu</div>
    <!-- <el-menu
    router
    background-color="transparent"
    :collapse="setIsCollapse"
    :default-active="defaultActive"
    unique-opened="false"
  >
    <template v-for="val in menuLists">
      <el-sub-menu
        :index="val.path"
        v-if="val.children && val.children.length > 0"
        :key="val.path"
      >
        <template #title>
          <i :class="val.meta.icon ? val.meta.icon : ''"></i>
          <span>{{ val.meta.title }}</span>
        </template>
        <SubItem :chil="val.children" />
      </el-sub-menu>
      <el-menu-item :index="val.path" :key="val.path" v-else>
        <i :class="val.meta.icon ? val.meta.icon : ''"></i>
        <template
          #title
          v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)"
        >
          <span>{{ val.meta.title }}</span>
        </template>
        <template #title v-else>
          <a :href="val.meta.isLink" target="_blank">
            {{ val.meta.title }}
          </a>
        </template>
      </el-menu-item>
    </template>
  </el-menu> -->
</template>

<script lang="ts" setup>
import { ref, toRefs, reactive, computed, defineComponent, getCurrentInstance } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useStore } from 'store/index'
import SubItem from './subItem.vue'

interface MenuList {
  path: string;
  children: object;
}
const str = 'ddd'
const props = defineProps<{
  menuList: MenuList;
}>()

const emit = defineEmits<{(e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>()

const store = useStore()
const route = useRoute()
const state = reactive({
    defaultActive: route.path,
})
// 获取父级菜单数据
const menuLists = computed(() => props.menuList)

// 获取布局配置信息
const getThemeConfig = computed(() => store.state.themeConfig)
// 设置菜单的收起/展开
const setIsCollapse = computed(() => (document.body.clientWidth < 1000 ? false : getThemeConfig.value.isCollapse))

// 路由更新时
onBeforeRouteUpdate((to) => {
    const clientWidth = document.body.clientWidth
    if (clientWidth < 1000) getThemeConfig.value.isCollapse = false
})
</script>
