import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  const jwt: JwtHelperService = new JwtHelperService();

  if (jwt.isTokenExpired()) {
    router.navigate(['/login'])
    return false;
  } else {
    return true;
  }
};
