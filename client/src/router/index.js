import { createRouter, createWebHistory } from "vue-router";
import RegisterUser from '../views/RegisterUser.vue'

const routes = [
    {
        path: '/register',
        name: 'register',
        component: RegisterUser
      }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;