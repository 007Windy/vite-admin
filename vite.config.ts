import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, "./");
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ],
        imports: ['vue', 'vue-router']
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      // svg
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: {
          // 移除svg默认颜色（iconfont下载的svg图标会自带默认颜色，有的默认颜色的svg图标无法设置颜色）
          plugins: [
            {
              name: 'removeAttrs',
              params: { attrs: ['class', 'data-name', 'fill', 'stroke'] }
            }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        [config.VITE_APP_BASE_PREFIX]: {
          target: config.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${config.VITE_APP_BASE_PREFIX}`), '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        // 全局样式引入
        scss: {
          /* 这里使用的是@use而不是@import，这是因为sass 团队说他们最终会删除 @import 语法 
          这里的 as * 语法就是全部导入的意思，也可以把*替换成想要的名字，比如改成globalScss。
          additionalData: `@use "./src/assets/style/main.scss" as globalScss;`
          然后在其他地方使用的时候：globalScss.xxx */
          additionalData: `
          @use "./src/styles/main.scss" as globalScss;
          @use "./src/styles/element/index.scss" as *;
          `,
        }
      }
    }
  };
});
