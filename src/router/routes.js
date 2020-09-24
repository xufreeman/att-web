/*eslint-disable*/
/*
 * @file routes 路由配置文件
 * @Author: heyuze
 * @Date: 2018-11-26 15:28:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-09-23 18:12:26
 */
import login from './login'



export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  ...login,
]