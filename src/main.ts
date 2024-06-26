import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { setPrimeVue } from "./modules/primeVue.module";
import { setPrimeIcons } from "./modules/primeIcons.module";
import { setComponent } from "./modules/components.module";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

setPrimeVue(app);
setPrimeIcons();
setComponent(app);

app.use(router);

app.mount("#app");
