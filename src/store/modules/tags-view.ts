import { getVisitedViews, setVisitedViews } from "@/utils/local-storage";
import { defineStore } from "pinia";
import { type RouteLocationNormalized } from "vue-router";

export type TagView = Partial<RouteLocationNormalized>

export const useTagsViewStore = defineStore("tags-view", () => {
  const default_VisitedViews  = getVisitedViews() ?? []
  const visitedViews = ref<TagView[]>(default_VisitedViews)

  /** 缓存标签栏数据 */
  watchEffect(() => {
    setVisitedViews(visitedViews.value);
  })

  // 新增标签栏
  const addVisitedView = (view: TagView) => {
    // 检查是否已经存在相同的 vistedView
    const index = visitedViews.value.findIndex((v) => v.path === view.path);
    if (index !== -1) {
      // 防止 query 参数丢失
      visitedViews.value[index].fullPath !== view.fullPath && (visitedViews.value[index] = { ...view })
    } else {
      // 添加新的 visited
      visitedViews.value.push({ ...view })
    }
  }

  // 删除标签页
  const delVisitedView = (view: TagView) => {
    const index = visitedViews.value.findIndex((v) => v.path === view.path)
    if (index !== -1) {
      visitedViews.value.splice(index, 1)
    }
  }

  return {
    visitedViews,
    addVisitedView,
    delVisitedView
  }
});