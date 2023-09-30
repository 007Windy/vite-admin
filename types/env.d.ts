/// <reference types="vite/client" />
/* 
declare module "*.vue" {
  // 引入 vue 模块中 ts 的方法
  import type { DefineComponent } from "vue";
  // 定义 vue 组件以及类型注解
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'
declare module 'path-browserify' */

/** 声明 vite 环境变量的类型（如果未声明则默认是 any） */
declare interface ImportMetaEnv {
  readonly VITE_BASE_API: string,
  readonly VITE_ROUTER_HISTORY: "hash" | "html5"
  readonly VITE_PUBLIC_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}