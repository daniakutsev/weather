import components from "./components/UI";
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./pages/Main";



const routes = [
  { path: "/Main", component: Main }
];
const router = new VueRouter({
  routes
});
//const app = createApp(App);
const app = new Vue({
  router
}).$mount("#app");
components.forEach((component) => {
  app.component(component.name, component);
})

