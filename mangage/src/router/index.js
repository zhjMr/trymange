import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/user",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user.vue"),
    children: [
      {
        path: "/test3",
        name: "test3",
        component: () => import("../views/test3.vue"),
      },
      {
        path: "/department",
        name: "department",
        component: () => import("../views/department.vue"),
      },
      {
        path: "/userList",
        name: "userList",
        component: () => import("../views/userList.vue"),
      },
      {
        path: "/roleList",
        name: "roleList",
        component: () => import("../views/roleList.vue"),
      },
      {
        path: "/menuList",
        name: "menuList",
        component: () => import("../views/menuList.vue"),
      },
      {
        path: "/goodCategory",
        name: "goodCategory",
        component: () => import("../views/goodCategory.vue"),
      },
      {
        path: "/phone",
        name: "phone",
        component: () => import("../views/mobile/phone.vue"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/classify/test.vue"),
      },
      {
        path: "/cs2",
        name: "cs2",
        component: () => import("../views/classify/content/cs2.vue"),
      },
      {
        path: "/menuList",
        name: "menuList",
        component: () => import("../views/menuList.vue"),
      },
      {
        path: "/document",
        name: "document",
        component: () => import("../views/document.vue"),
      },
      {
        path: "/systemCode",
        name: "systemCode",
        component: () => import("../views/systemCode.vue"),
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
