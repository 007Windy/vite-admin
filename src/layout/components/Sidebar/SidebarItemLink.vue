<template>
  <!-- 侧边栏菜单链接-->
  <router-link :to="props.to">
    <slot/>
  </router-link>
</template>
<script setup lang='ts'>

interface Props {
  to: string
}

const props = defineProps<Props>()
</script>
<style lang='scss' scoped>
</style>