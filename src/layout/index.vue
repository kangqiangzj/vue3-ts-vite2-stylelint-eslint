<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-16 08:42:43
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 14:16:49
 * @FilePath: \website\src\layout\index.vue
-->
<template>
    <div class="app-wrapper">
        sssss
        <!-- <component :is="layout" /> -->
        <Defaults />
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed, ref } from 'vue'
import Defaults from './main/index.vue'

const layout = ref<string>('Defaults')
// export default defineComponent({
//   name: 'Layout',
//   components: {
//     Defaults
//   },
//   setup() {
//     const layout = ref<string>('Defaults')
//     return {
//       layout
//     }
//   }
// })
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
