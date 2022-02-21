<!--
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-15 14:12:13
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 15:38:05
 * @FilePath: \website\src\components\HelloWorld.vue
-->
<template>
    <div class="border">
        <a>msg:{{ props.msg }}</a>
        <button @click="addCount">count is: {{ count }}</button>
        <SvgIcon icon-class="bug"></SvgIcon>
        <el-button type="primary" round :icon="Search">按钮</el-button>
    </div>
</template>
<script lang="ts" setup>
import {
    Search,
    // Edit,
    // Check,
    // Message,
    // Star,
    // Delete,
} from '@element-plus/icons-vue'
import { ref, withDefaults } from 'vue'

const count = ref(0)
const addCount = () => count.value++

interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
    msg: '默认msgs',
})
</script>
<!--<script lang="ts">
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default:'默认msgs',
        require:true
      }
    },
    components:{
      // Search,
    },
    setup: () => {
      const count = ref(0)
      return { count }
    }
  })
</script>-->

<style lang="scss" scoped>
a {
    color: #42b983;
}
label {
    margin: 0 0.5em;
    font-weight: bold;
}
code {
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
    background-color: #eeeeee;
}
</style>
