<template>
  <div v-if="!props.item.meta?.hidden"
  >
  <!-- 根菜单-->
  <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
    <sidebar-item-link :to="resolvepPath(theOnlyOneChild.path)">
      <el-menu-item :index="resolvepPath(theOnlyOneChild.path)">
        <SvgIcon v-if="theOnlyOneChild?.meta?.svgIcon" :name="theOnlyOneChild.meta.svgIcon"></SvgIcon>
        <component v-else-if="theOnlyOneChild?.meta?.elIcon" :is="theOnlyOneChild.meta.elIcon" class="el-icon"/>
        <template v-if="theOnlyOneChild?.meta?.title" #title>
          {{ theOnlyOneChild.meta.title }}
        </template>
      </el-menu-item>
    </sidebar-item-link>
  </template>
  <!-- 多级菜单-->
  <el-sub-menu v-else :index="resolvepPath(props.item.path)">
    <template #title>
      <SvgIcon v-if="props.item.meta?.svgIcon" :name="props.item.meta.svgIcon"></SvgIcon>
      <component v-else-if="props.item.meta?.elIcon" :is="props.item.meta.elIcon" class="my-el-icon"/>
      <span>{{ props.item?.meta?.title }}</span>
    </template>
    <template v-if="props.item.children">
      <sidebar-item
        v-for="child in props.item.children"
        :key="child.path"
        :item="child"
        :is-collapse="props.isCollapse"
        :base-path="resolvepPath(child.path)"
      ></sidebar-item>
    </template>
  </el-sub-menu>
  </div>
</template>
<script setup lang='ts'>
import { type RouteRecordRaw } from 'vue-router';
import SidebarItemLink from './SidebarItemLink.vue';
import { isExternal } from '@/utils/validate';
import path from "path-browserify"

interface Props {
  item: RouteRecordRaw, // 路由
  isCollapse?: boolean,
  isFirstLevel?: boolean,
  basePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  isCollapse: false,
  isFirstLevel: true,
  basePath: ''
})


/** 
 * 是否显示根菜单 alwaysShow， 当 alwaysShow 为 false 时，
 * 路由下面的 children 大于1 时会自动变成嵌套模式，
 * 若 children 为 1 是会自动变成根路由
*/
/** 是否显示根菜单 */
const alwaysShowRootMenu = computed(() => props.item.meta?.alwaysShow)

/** 获取显示的子菜单 */
const showingChildren = computed(() => {
  // console.log('props.item.children?.filter((child) => !child.meta?.hidden) ?? [] ==', props.item.children?.filter((child) => !child.meta?.hidden) ?? []);
  
  return props.item.children?.filter((child) => !child.meta?.hidden) ?? []
})

/** 显示的子菜单数量 */
const showingChildrenNumber = computed(() => {
  return showingChildren.value.length
})
/** 是否唯一的子菜单项 */
const theOnlyOneChild = computed(() => {
  const number = showingChildrenNumber.value
  switch (true) {
    case number > 1:
      // console.log('number > 1', number);
      return null
    case number === 1:
    console.log('number === 1', showingChildren.value[0]);
      return showingChildren.value[0]
    default:
      // { ...props.item, path: "" } ？？
      // console.log('{ ...props.item, path: "" }', { ...props.item, path: "" });
  // console.log('number ==', number);
      return { ...props.item, path: "" }
  }
})

/** 解析路径 */
const resolvepPath = (routePath: string) => {
  switch(true) {
    case isExternal(routePath):
      // console.log('routePath ==', routePath);
      return routePath
    case isExternal(props.basePath):
      // console.log('props.basePath ==', props.basePath);
      return props.basePath
    default:
    // console.log("path.resolve(props.basePath, routePath) ==", path.resolve(props.basePath, routePath))
      return path.resolve(props.basePath, routePath)
  }
}
</script>
<style lang='scss' scoped>
.svg-icon {
  min-width: 1em;
  margin-right: 12px;
  font-size: 18px;
}
.el-icon {
  width: 1em;
  margin-right: 12px;
  font-size: 18px;
}
</style>