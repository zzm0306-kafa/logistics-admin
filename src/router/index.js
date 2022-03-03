import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/user/index'
import Role from '@/views/role/index'
import Hospital from '@/views/hospital/index'
import Organization from '@/views/organization/index'
Vue.use(VueRouter)
// 定义路由规则
const routes = [
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/role',
    name: 'role',
    component: Role
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: Hospital
  },
  {
    path: '/organization',
    name: 'organization',
    component: Organization
  }
]
const router = new VueRouter({
  routes
})
export default router
