<script setup lang="ts">
/* import zhCn  from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs'
const language = ref('zh-cn')

const locale = computed(() => (language.value === 'zh-cn'? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
} */
</script>

<template>
    <router-view></router-view>
   <!--  <el-button mb-2 @click="toggle">Switch Language</el-button>
    <br />
    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
      <router-view></router-view>

    </el-config-provider> -->

 
</template>

<style lang="scss" scoped>
.menu-icon {
  font-size: 30px;
  color: #f66;
}
.test {
  // color: globalScss.$themeColor
  color: --color-primary;
}
</style>
