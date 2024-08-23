import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const estaAutenticado = !!localStorage.getItem('token')
  return estaAutenticado;
};
