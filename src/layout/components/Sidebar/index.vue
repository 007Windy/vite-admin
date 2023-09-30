<template>
  <el-scrollbar>
   <el-menu 
    :default-active="activeMenu"
    :collapse="isCollapse"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :unique-opened="true"
    :collapse-transition="false"
   >
    <sidebar-item 
      v-for="route in constantRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
      :is-collapse="isCollapse"
    ></sidebar-item>
   </el-menu>
    <!-- <sidebar-menu></sidebar-menu> -->
  </el-scrollbar>
</template>
<script setup lang='ts'>
import { constantRoutes } from '@/router/index.ts'
import SidebarItem from './SidebarItem.vue';
// import SidebarMenu from './SidebarMenu.vue';

onMounted(() => {
  console.log('constantRoutes ==', constantRoutes);
  
})

// const routes = useRoute()

const activeMenu = computed(() => {
  return '/dashboard'
})

const isCollapse = computed(() => {
  return false
})

const backgroundColor = '#001428'

const textColor = '#c0c4cc'

const activeTextColor = '#fff'
</script>
<style lang='scss' scoped>
@mixin tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #409eff;
    width: 2px;
    height: 100%;
  }
}

:deep(.el-menu-item){
  &.is-active {
    @include tip-line();
    background-color: #409eff10;
  }
}
</style>