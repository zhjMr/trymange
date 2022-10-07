import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/user",
    name: "user",
    redirect: "/one",
    component: () => import("../views/user.vue"),
    children: [
      {
        path: "/one",
        name: "one",
        component: () => import("../views/one.vue"),
        meta: {
          title: "首页"
        }
      },
      // {
      //   path: "/department",
      //   name: "department",
      //   component: () => import("../views/department.vue"),
      //   meta: {
      //     title: "机构管理"
      //   }
      // },
      // {
      //   path: "/userList",
      //   name: "userList",
      //   component: () => import("../views/userList"),
      //   meta: {
      //     title: "用户管理"
      //   }
      // },
      // {
      //   path: "/roleList",
      //   name: "roleList",
      //   component: () => import("../views/roleList.vue"),
      //   meta: {
      //     title: "角色管理"
      //   }
      // },
      // {
      //   path: "/menuList",
      //   name: "menuList",
      //   component: () => import("../views/menuList.vue"),
      //   meta: {
      //     title: "权限管理"
      //   }
      // },
      // {
      //   path: "/goodCategory",
      //   name: "goodCategory",
      //   component: () => import("../views/goodCategory.vue"),
      //   meta: {
      //     title: "分类管理"
      //   }
      // },
      // {
      //   path: "/document",
      //   name: "document",
      //   component: () => import("../views/document.vue"),
      //   meta: {
      //     title: "接口文档"
      //   }
      // },
      // {
      //   path: "/systemCode",
      //   name: "systemCode",
      //   component: () => import("../views/systemCode.vue"),
      //   meta: {
      //     title: "日志管理"
      //   }
      // },

    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
