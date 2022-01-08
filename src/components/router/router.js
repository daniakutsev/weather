import { createWebHistory, createRouter } from "vue-router";
import Main from "../../pages/Main";
import FullCard from "../../pages/FullCard";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/FullCard",
    component: FullCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;