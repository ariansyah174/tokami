import { createRouter, createWebHistory } from "vue-router";

import Beranda from "../views/BerandaView.vue";
// import ForgotPassword from '../views/auth/ForgotPasswordView.vue'
// import NotFound from '../views/errors/404.vue'
// import Home from '../views/HomeView.vue'
// import UserManagement from '../views/user-management/UserManagement.vue'

const routes = [
  {
    path: "/",
    name: "beranda",
    component: Beranda,
  },
  // {
  //     path: '/lupa-password',
  //     name: 'lupa-password',
  //     component: ForgotPassword
  // },
  // {
  //     path: '/home',
  //     name: 'home',
  //     component: Home
  // },
  // {
  //     path: '/user-management',
  //     name: 'user-management',
  //     component: UserManagement
  // },
  // {
  //     path: '/:pathMatch(.*)*',
  //     name: 'notFound',
  //     component: NotFound
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
