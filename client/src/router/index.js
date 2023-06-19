import { createRouter, createWebHistory } from "vue-router";
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser from '../views/LoginUser.vue'

const routes = [
    {
        path: '/register',
        name: 'register',
        component: RegisterUser
      },
      {
        path: '/login',
        name: 'login',
        component: LoginUser
      }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;