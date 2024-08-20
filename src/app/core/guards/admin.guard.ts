import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const estaAutenticado = !!localStorage.getItem('token')


  return true;
};
