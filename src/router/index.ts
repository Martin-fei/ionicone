import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Ex from '../views/Ex.vue'
import Button from '../views/Button.vue'
import Model from '../views/Model.vue'
import Toolbar from '../views/Toolbar.vue'
import List from '../views/List.vue'
import Form from '../views/Form.vue'
import Slide from '../views/Slide.vue'
import Selectbar from '../views/Selectbar.vue'
import Segment from '../views/Segment.vue'
import Date from '../views/Date.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path:'/form',
    component:Form,
  },
  {
    path:'/date',
    component:Date,
  },
  {
    path:'/slide',
    component:Slide,
  },
  {
    path:'/selectbar',
    component:Selectbar,
  },
  {
    path:'/segment',
    component:Segment,
  },
  {
    path:'/list',
    component:List,
  },
  {
    path:'/ex',
    component:Ex,
  },
  {
    path:'/toolbar',
    component:Toolbar,
  },
  {
    path:'/model',
    component:Model,
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
