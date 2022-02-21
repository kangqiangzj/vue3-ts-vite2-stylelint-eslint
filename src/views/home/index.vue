<!--
 * @Description: home
 * @Author: zhangjie
 * @Date: 2022-02-16 08:42:26
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 14:23:32
 * @FilePath: \website\src\views\home\index.vue
-->
<template>
    <div>
        <HelloWorld :msg="'hello world msg'"></HelloWorld>
        <el-button @click="addCount">count is: {{ count }}</el-button>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineComponent } from 'vue'
import { useStore } from 'store/index'

import HelloWorld from '@/components/HelloWorld.vue'

const a = 'a'
const store = useStore()
const count: any = computed({
    get() {
        return store.state.app.count
    },
    set(value) {
        store.commit('increment', value)
    },
})

const addCount = () => {
    count.value += 1
}
</script>

<style></style>
