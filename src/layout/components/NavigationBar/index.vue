<template>
  <div class="navigation-bar">
    <Hamburger class="hamburger"/>
    <Breadcrumb class="breadcrumb"/>
    <theme-switch/>
    <div class="user">
      <el-avatar  :size="30" >
        <template #default>
          <el-icon>
            <i-ep-UserFilled/>
          </el-icon>
        </template>
      </el-avatar>
      <span>admin</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
import Hamburger from '../Hamburger/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
// import { ref, reactive } from 'vue'
</script>
<style lang='scss' scoped>
.navigation-bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .hamburger {
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
  }
  .breadcrumb {
    flex: 1;
  }
  .user {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .el-avatar {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>