import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const authservice = inject(AuthService);
  const router = inject(Router);

  return authservice.AcessAuthUser.pipe(
    map((authuser)=> {
      if(!authuser){
        return router.createUrlTree(['auth','login'])
      }
      return authuser.rol !== 'Admin'
      ? router.createUrlTree(['dashboard', 'Perfil'])
      : true; 
    }),
  );
};
