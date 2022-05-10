import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import venom from "./venom"
const routes = [{
    path: "/",
    component: () =>
        import ("../views/index/index")
}, venom]
export const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes
})
export default router