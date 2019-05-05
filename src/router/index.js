// 按模块的方式

import Vue from 'vue'
import Router from 'vue-router'
import home from "./home"
import my from './my'
import overseas from './overseas'
import reach from './reach'
import shopping from './shopping'


Vue.use(Router)

export default new Router({
  routes: [
    home,
    my,
    overseas,
    reach,
    shopping
  ]
})

