import { createApp } from "vue";
import App from "./App.vue";

import "cirrus-ui";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

createApp(App)
  .use(VuePlyr, {
    plyr: {},
  })
  .mount("#app");
