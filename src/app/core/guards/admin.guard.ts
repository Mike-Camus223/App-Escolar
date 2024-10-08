import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.AcessAuthUser.pipe(
    map((user) => {
      if (!user) {
        return router.createUrlTree(['auth', 'login']);
      }
      return user.rol !== 'Admin'
        ? router.createUrlTree(['dashboard', 'Perfil'])
        : true;
    }),
  );
};


