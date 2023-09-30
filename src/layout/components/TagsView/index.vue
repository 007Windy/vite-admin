<template>
  <div class="scroll-container">
    <scroll-pane>
     <!--router-link todo-->
     <router-link
      v-for="tag in tagsViewStore.visitedViews"
      :key="tag.path"
      :to="{ path: tag.path, query: tag.query}"
     >
      {{ tag.meta?.title }}
     </router-link>
    </scroll-pane>
  </div>
</template>
<script setup lang='ts'>
import ScrollPane from './ScrollPane.vue'
import { type TagView, useTagsViewStore } from '@/store/modules/tags-view';
import {  RouteRecordRaw, useRoute } from 'vue-router';
const tagsViewStore = useTagsViewStore()
const route = useRoute()

interface tagsViewType {
  id: number,
  title?: string
}
const tagsView = reactive<tagsViewType[]>({
  list: [
    {
      id: 1,
      title: 'tags1',
      path: '/1'
    },
    {
      id: 2,
      title: 'tags2',
      path: '/2'
    },
    {
      id: 3,
      title: 'tags3',
      path: '/3'
    },
  ]
})

/** 判断标签页是否固定 */
const isAffix = (tag: TagView) => {
  return tag.meta?.affix
}
/** 筛选出固定标签页 */
/* const filterAffixTags = (routes: RouteRecordRaw[], basePath = "/") => {

} */
/** 添加标签页 */
const addTags = () => {
  console.log('route ==', route);
  
  if (route.name) {
    tagsViewStore.addVisitedView(route)
  }
}
watch(
  route,
  () => {
    addTags()
  },
  {
    deep: true
  }
)
onMounted(() => {
  addTags();
})
</script>
<style lang='scss' scoped>
.scroll-container {
  height: 40px;
  background-color: red;
  // background-color: #000;
}
.scroll-flex-content {
  display: flex;
  .item {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  flex-shrink: 0;
  background-color: #fef0f0;
  }
}

</style>