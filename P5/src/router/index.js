import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../pages/SignUp.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

const routes = [
    {path : '/SignUp', component: SignUp},
    {path : '/Login', component: Login},
    {path : '/Home', component: Home},
    {path : '/', redirect: '/SignUp'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router