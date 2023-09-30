/** 统一处理 localStorage */
import CacheKey from "@/constants/cache-key";
import { type TagView } from "@/store/modules/tags-view";

// 标签栏
export const getVisitedViews = () => {
  const json = localStorage.getItem(CacheKey.VISITED_VIEWS);
  return JSON.parse(json ?? "[]") as TagView[]
}
export const setVisitedViews = (views: TagView[]) => {
  views.forEach((view) => {
    // 删除不必要的属性，防止 JSON.stringify 处理到循环使用
    // console.log('view ==', view);
    
    delete view.matched
    delete view.redirectedFrom
  })
  localStorage.setItem(CacheKey.VISITED_VIEWS, JSON.stringify(views));
}