import NavBar from "@/components/NavBar.vue";
import CardFlix from "@/components/CardFlix.vue";
import type { App } from "vue";

export function setComponent(app: App) {
  app.component("NavBar", NavBar);
  app.component("CardFlix", CardFlix);
}
