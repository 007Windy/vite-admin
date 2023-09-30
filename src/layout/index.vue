<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <div class="menu">
      <side-bar/>
    </div>
    <!--右侧 导航、标签、内容-->
    <div class="container">
      <navigation-bar/>
      <tags-view/>
      <app-main/>
    </div>
  </div>
</template>
<script setup lang='ts'>
import AppMain from './components/AppMain.vue';
import TagsView from './components/TagsView/index.vue'
import NavigationBar from './components/NavigationBar/index.vue'
import sideBar from './components/Sidebar/index.vue'
// import { ref, reactive } from 'vue'
</script>
<style lang='scss' scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  // display: flex;
}

.menu {
  width: 210px;
  height: 100%;
  position: fixed;
  background-color: #001428;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.container {
  width: 100%;
  margin-left: 210px;
}

</style>