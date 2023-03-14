import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// mobile vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
// for css: height: calc(var(--vh, 1vh) * 100);

const app = createApp(App);

app.use(router);

app.mount("#app");
