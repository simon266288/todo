// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue模块
import App from './App' //引入vue组件
import router from './router' // 引入路由配置文件
import store from './vuex/store' //引入vuex实例
import Mock from './mock' //引入mock模块
Mock.start() //执行初始化函数
Vue.config.productionTip = false // 关闭生产模式下给出的提示

new Vue({ // 创建一个 Vue 的根实例
  el: '#app', //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router, // 注入路由配置。
  store,
  template: '<App/>', //配置根模板 即打开页面显示那个组件
  components: {
    App
  } // 注入组件
})
