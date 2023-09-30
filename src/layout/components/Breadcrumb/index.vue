<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span v-if="item.redirect === 'noRedirect' || index === breadcrumbs.length - 1">
          {{ item.meta.title }}
        </span>
        <a v-else @click="handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { type RouteLocationMatched } from "vue-router";
import { compile } from "path-to-regexp";

const route = useRoute();
const router = useRouter();

/** 定义响应式数据 breakcrumbs，用于存储面包屑导航信息 */
const breadcrumbs = ref<RouteLocationMatched[]>([]);

/** 获取面包屑信息 */
const getBreakcumb = () => {
  breadcrumbs.value = route.matched.filter(
    (item) => item.meta?.title && item.meta?.breadcrumb !== false
  );
};

/** 编译路由 */
const pathCompile = (path: string) => {
  const toPath = compile(path);
  return toPath(route.params);
};

/** 处理面包屑导航点击事件 */
const handleLink = (item: RouteLocationMatched) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect as string);
    return;
  }
  router.push(pathCompile(path));
};

/** 监听路由变化，更新面包屑导航信息 */
watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/redirect/")) return;
    getBreakcumb();
  }
);

/** 初始化面包屑导航信息 */
getBreakcumb();
</script>
<style lang="scss" scoped></style>
