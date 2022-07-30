import { signingInWithgoogle, logIn } from "../firebase-doc/authentication.js";
import { getRedirectResult, auth } from "../firebase-doc/firebase.js";
import { changeRoute } from "../lib/router.js";

export const home = () => {
  const viewHome =
    // html
    `
    <div class="firstView">
    <img class = "homePic" src = "Social-images/homePic.png">
    <div class = "logo">
      <img src = "Social-images/logoNuevo.png">
    </div>
    <input class = "email" type="text" placeholder="Escribe tu correo">
    <input type = 'password'  class = "password" type="text" placeholder="Escribe tu contraseña">
    <button type = 'submit' class="loginButton"><strong>INICIAR SESIÓN</strong></button>
    <h3 class="o"><strong>o</strong></h3>
    <button type='submit' class="loginGoogle"><strong>INICIAR SESIÓN CON GOOGLE</strong></button>
    <h3 class="registerChoice"><strong>¿No tienes una cuenta?</strong></h3>
    <a href="#/register" class="register"><strong>REGISTRATE</strong></a>
    </div>
    <div>
    <footer>Copyright 2022 | Genesis Longart - Claudia Morales</footer>
    </div>
    </div>
    `;
  const container = document.createElement("div");
  container.innerHTML = viewHome;
  container.className = "firstViewContainer";
  const googleButton = container.querySelector(".loginGoogle");
  googleButton.addEventListener("click", async (e) => {
    const user = await signingInWithgoogle();
    if (user) {
      changeRoute("#/wall");
    } else console.log("error");
  });
  const inWithGoogle = async () => {
    const redirected = await getRedirectResult(auth);
    if (redirected) {
      changeRoute("#/wall");
    }
  };
  inWithGoogle();

  const loginButton = container.querySelector(".loginButton");

  loginButton.addEventListener("click", async () => {
    const loginEmail = container.querySelector(".email").value;
    const userPassword = container.querySelector(".password").value;
    const userIn = await logIn(loginEmail, userPassword);
    if (userIn) {
      changeRoute("#/wall");
    } else console.log("error");
  });
  return container;
};
