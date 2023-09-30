<template>
  <div>
    <el-card header="menu 1">
      <!-- 多级菜单 -->
      <router-view></router-view>
    </el-card>
  </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped>
.parent-title {
  margin: 10px auto;
}
</style>