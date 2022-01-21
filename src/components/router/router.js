import { createWebHistory, createRouter } from "vue-router";
import Main from "../../pages/Main";
import FullCard from "../../pages/FullCard";

const routes = [
  {
    path: "/",
    name:"Main",
    component: Main
  },
  {
    path: "/:id",
    name:"FullCard",
    component: FullCard,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;