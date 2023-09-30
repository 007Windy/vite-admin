/// <reference types="vite/client" />

declare module "*.vue" {
  // 引入 vue 模块中 ts 的方法
  import type { DefineComponent } from "vue";
  // 定义 vue 组件以及类型注解
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'
declare module 'path-browserify'