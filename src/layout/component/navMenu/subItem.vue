<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 15:55:45
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 12:10:00
 * @FilePath: \website\src\layout\component\navMenu\subItem.vue
-->
<template>
    <div>
        11
    </div>
    <!-- <template v-for="val in chils">
        <el-submenu v-if="val.children && val.children.length > 0" :key="val.path" :index="val.path">
            <template #title>
                <i :class="val.meta.icon"></i>
                <span>{{ val.meta.title }}</span>
            </template>
            <sub-item :chil="val.children" />
        </el-submenu>
        <el-menu-item v-else :key="val.path" :index="val.path">
            <template v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
                <i :class="val.meta.icon ? val.meta.icon : ''"></i>
                <span>{{ val.meta.title }}</span>
            </template>
            <template v-else>
                <a :href="val.meta.isLink" target="_blank">
                    <i :class="val.meta.icon ? val.meta.icon : ''"></i>
                    {{ val.meta.title }}
                </a>
            </template>
        </el-menu-item>
    </template> -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'NavMenuSubItem',
    props: {
        chil: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
    // 获取父级菜单数据
        const chils = computed(() => props.chil)

        return {
            chils,
        }
    },
})
</script>
