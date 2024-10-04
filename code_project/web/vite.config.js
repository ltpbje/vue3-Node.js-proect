import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    //配置反向代理
    proxy: {
      //凡是以 /webapi 地址开头的请求, 都要做代理操作
      '/webapi': {
        //目的地址 => 代理服务器,需要向该地址发起请求
          target:'http://localhost:3000',
          //是否跨域
          changeOrigin:true,
      }
    }
  }
})
