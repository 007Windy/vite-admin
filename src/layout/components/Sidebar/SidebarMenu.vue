<template>
  <div>
    <el-menu
    default-active="2"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><i-ep-location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><i-ep-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><i-ep-document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><i-ep-setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
  </div>
 <!-- <el-menu 
     :default-openeds="defaultOpeneds"
     :default-active="$route.fullPath" 
     class="el-menu-vertical-demo"
     :unique-opened="true"
     :active-text-color="themeColor"
     router
     :collapse="isCollapse"
    >
      <template v-for="item in menus" :key="item._id">
        <siderbar-item :item-data="item" v-if="!item?.meta?.hidden"></siderbar-item>
      </template>
    </el-menu> -->
</template>
<script setup lang='ts'>
// import SiderbarItem from './SidebarItem.vue'
import { ref, reactive } from 'vue'
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang='scss' scoped>
</style>