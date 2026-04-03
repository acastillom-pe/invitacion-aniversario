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

router.beforeEach((to) => {
    const elegido = localStorage.getItem('sobre-elegido')
    if (elegido && (to.path === '/' || to.path === '/sobres')) {
        return `/carta/${elegido}`
    }
})

export default router