import { createRouter, createWebHistory } from 'vue-router'
import Test_1 from '../components/Test_1.vue'
import Test_2 from '../components/Test_2.vue'
import Test_3 from '../components/Test_3.vue'


const routes = [
  {
    path: '/hoge',
    component: Test_1
  },
  {
    path: '/hoge1',
    component: Test_2
  },
  {
     path: '/hoge2',
     component: Test_3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



//import Home from '../views/Home.vue'


/*
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }

*/