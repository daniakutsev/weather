import components from "./components/UI";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/router";
import store from "./components/store";


const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount("#app");

components.forEach((component) => {
  app.component(component.name, component);
});

