import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Permission",
    component: () => import("../views/Permission/Permission.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/PermissionList/PermissionList.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
