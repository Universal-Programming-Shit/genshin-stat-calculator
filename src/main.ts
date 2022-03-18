import App from "./App.vue";
import ArtifactGoblet from "./artifact/components/ArtifactGoblet.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "reset-css";

createApp(ArtifactGoblet).use(createPinia()).mount("#app");
