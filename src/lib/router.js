import { home } from '../templates/templateHome.js';
import { registration } from '../templates/templateRegister.js';
import { wall } from '../templates/templateWall.js';
import { bForm } from '../templates/templateBullyingForm.js';

export const changeRoute = (hash) => {
  window.location.hash = hash;
  //window.history.replaceState({}, "", window.location.origin + hash); //reemplaza el estado del hash en el historial del navegador
  return showTemplates(hash)
}

const showTemplates = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch(hash) {
    case '#/home':
    containerRoot.appendChild(home());
      break;
    case '#/register':
    containerRoot.appendChild(registration());
      break;
    case '#/wall':
    containerRoot.appendChild(wall());
      break;
    case '#/bullyingForm':
    containerRoot.appendChild(bForm());
      break;
    case '':
    containerRoot.appendChild(home());
      break;
    default:
    containerRoot.innerHTML = `<h2>Esta página no existe</h2>`;
  }
}