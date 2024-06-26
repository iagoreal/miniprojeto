import NavBar from "@/components/NavBar.vue";
import type { App } from "vue";

export function setComponent(app: App) {
  app.component("NavBar", NavBar);
}
