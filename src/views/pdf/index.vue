<template>
  <div @click="outside">
    <el-button @click.stop="inside">按钮</el-button>
    <!--//阻止a标签跳转，仅执行函数search-->
     
    <!-- pdf -->
  </div>
  <a href="http://www.baidu.com" @click="search">百度一下</a> 
</template>
<script setup lang='ts'>
// import { ref, reactive } from 'vue'
const outside = () => {
  alert('div')
} 

const inside = () => {
  alert('button')
}

const search = () => {
  alert('search')
}
</script>
<style lang='scss' scoped>
</style>