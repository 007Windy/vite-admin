import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

const Layouts = () => import('@/layout/index.vue')

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', svgIcon: 'dashboard', affix: true}
      }
    ],
  },
  {
    path: '/table',
    component: Layouts,
    redirect: '/table/index',
    children: [
      {
        path: '',
        component: () => import('@/views/table/index.vue'),
        name: 'Table',
        meta: { title: '表格', svgIcon: 'tuwengongge-xianxing'},
      }
    ]
  },
  {
    path: '/tab',
    component: Layouts,
    children: [
      {
        path: '',
        component: () => import('@/views/tab/index.vue'),
        name: 'Tab',
        meta: { title: '选项卡', svgIcon: 'mianxingshangjiantou'},
      }
    ]
  },
  {
    path: '/menus',
    component: Layouts,
    redirect: '/menus/menu1',
    name: 'Menu',
    meta: {
      title: '多级菜单',
      svgIcon: 'menu'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menus/menu1/index.vue'),
        redirect: '/menus/menu1/menu1-1',
        name: 'menu1',
        meta: {
          title: 'menu1',
        },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menus/menu1/menu1-1/index.vue'),
            name: 'menu1-1',
            meta: {
              title: 'menu1-1',
            }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menus/menu1/menu1-2/index.vue'),
            redirect: '/menus/menu1/menu1-2/menu1-2-1',
            name: 'menu1-2',
            meta: {
              title: 'menu1-2',
            },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/menus/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'menu1-2-1',
                meta: {
                  title: 'menu1-2-1',
                }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/menus/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'menu1-2-2',
                meta: {
                  title: 'menu1-2-2',
                }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/menus/menu1/menu1-3/index.vue'),
            name: 'menu1-3',
            meta: {
              title: 'menu1-3',
            }
          } 
        ]
      },
       {
        path: 'menu2',
        component: () => import('@/views/menus/menu2/index.vue'),
        name: 'menu2',
        meta: {
          title: 'menu2'
        }
      } 
    ]
  },
  {
    path: '/pdf',
    component: Layouts,
    children: [
      {
        path: '',
        component: () => import('@/views/pdf/index.vue'),
        name: 'Pdf',
        meta: { title: 'pdf', svgIcon: 'ziliao' }
      }
    ]
  },
  {
    path: '/zip',
    component: Layouts,
    children: [
      {
        path: '',
        component: () => import('@/views/zip/index.vue'),
        name: 'Zip',
        meta: { title: 'zip', svgIcon: 'zichan' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      hidden: true
    }
  }
]

/**
 * 动态路由
 * 用来放置有权限（Roles属性）的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layouts,
    redirect: "/permission/page",
    name: "Permisson",
    meta: {
      title: "权限管理",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true  // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"]  // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限"   // 如果未设置角色，则表示：该页面不需要权限, 但会继承根路由的角色
        }
      },
      {
        path: "/:pathMatch(.*)*", // 必须把 ErrorPage 放到最后
        redirect: "/404",
        name: "ErrorPage",
        meta: {
          hidden: true
        }
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: import.meta.env.VITE_ROUTER_HISTORY === 'hash'
  ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
  : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 所有动态路由必须带有 Name 属性， 否则可能无法重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器，交互体验不是很好
    console.log('error ==', error);
    window.location.reload()
    
  }
}

export default router