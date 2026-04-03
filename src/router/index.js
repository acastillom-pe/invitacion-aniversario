import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/Intro.vue'
import Sobres from '../components/Sobres.vue'
import Carta from '../components/Carta.vue'

const routes = [
    { path: '/', component: Intro },
    { path: '/sobres', component: Sobres },
    { path: '/carta/:tipo', component: Carta }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router