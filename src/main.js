import { home } from "./templates/templateHome.js";
import { changeRoute } from "./lib/router.js";

const init = () => {
  window.addEventListener("hashchange", () => {
    document.getElementById("root").innerHTML = home();
    changeRoute(window.location.hash);
  });
  changeRoute(window.location.hash);
};

window.addEventListener("load", init);
