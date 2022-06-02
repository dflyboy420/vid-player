import { createApp } from "vue";
import App from "./App.vue";

// import * as tf from '@tensorflow/tfjs-core';
// import ("@tensorflow/tfjs-backend-cpu");
// import ("@tensorflow/tfjs-backend-webgl");
import "cirrus-ui";
import "shaka-player/dist/controls.css";
// import VuePlyr from "vue-plyr";
// import "vue-plyr/dist/vue-plyr.css";

createApp(App)
  // .use(VuePlyr, {
  //   plyr: {},
  // })
  .mount("#app");
