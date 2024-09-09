const {defineConfig} = require('@vue/cli-service')

// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/users':{
                target: 'http://localhost:3000',
                changeOrigin:true
         }
     }  
    },
    configureWebpack: {
      plugins: [
        require('unplugin-auto-import/webpack').default({ resolvers: [ElementPlusResolver()], }),
        require('unplugin-vue-components/webpack').default({ resolvers: [ElementPlusResolver()]}),
            // AutoImport({
            //     resolvers: [ElementPlusResolver()],
            // }),
            // Components({
            //     resolvers: [ElementPlusResolver()],
            // }),
        ]
    }
})