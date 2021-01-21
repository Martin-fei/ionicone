import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Ex from '../views/Ex.vue'
import Button from '../views/Button.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path:'/ex',
    component:Ex,
  },
  {
    path:'/button',
    component:Button,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
