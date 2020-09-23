import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";

import router from "./router";
// import store from "./store";

// import eventbus from "./services/eventbus";
// import generator from "./services/generator";
// import payment from "./services/payment";

import services from "./plugins/services";

createApp(App)
  //.use(store)
  .use(router)
  .use(services)
  // .use(generator)
  // .use(payment)
  .mount("#app");
