import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "reset-css";
import router from "./router";

createApp(App).use(createPinia()).use(router).mount("#app");
