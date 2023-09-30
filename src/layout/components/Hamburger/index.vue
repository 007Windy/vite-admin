<template>
  <div @click="toggleClick">
    <el-icon :size="20" class="icon">
      <i-ep-fold v-if="props.isActive"/>
      <i-ep-expand v-else/>
    </el-icon>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'

interface Props {
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

/** Vue 3.3+ defineEmits 语法 */
const emit = defineEmits<{
  toggleClick:[]
}>()
const toggleClick = () => {
  emit("toggleClick")
}
</script>
<style lang='scss' scoped>
</style>