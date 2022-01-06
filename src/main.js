import components from "./components/UI";
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./pages/Main";



const routes = [
  { path: "/", component: Main }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});


const app = Vue.createApp({})
app.use(router)
app.mount('#app')
components.forEach((component) => {
  app.component(component.name, component);
})

