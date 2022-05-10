import {
    createRouter,
    createWebHistory
} from 'vue-router'
import venom from "./venom"
const routes = [{
    path: "/",
    component: () =>
        import ("../views/index/index")
}, venom]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router