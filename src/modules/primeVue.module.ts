import Menubar from "primevue/menubar";
import Card from "primevue/card";
import ToggleButton from "primevue/togglebutton";

import type { App } from "vue";

export function setPrimeVue(app: App) {
  app.component("Menubar", Menubar);
  app.component("Card", Card);
  app.component("ToggleButton", ToggleButton);
}
