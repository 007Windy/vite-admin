<template>
  <div class="scroll-container">
    <el-scrollbar ref="scrollContainer">
      <slot/>
    </el-scrollbar>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style lang='scss' scoped>
</style>