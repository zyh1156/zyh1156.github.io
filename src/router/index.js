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
}, venom, {
    path: "",
    component: () =>
        import ("../views/index/index")
}]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router