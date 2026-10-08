import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const roles = route.data['roles'];
  
  // 1. Access token ausente ou expirado: tenta renovar com o refresh token (cookie)
  if (auth.isInvalidAccessToken()) {
    try {
      await auth.getNewAccessToken();
    } catch {
      // Não foi possível renovar: o usuário não está logado
      auth.clearAccessToken();
      return router.createUrlTree(['/login']);
    }
  }
  
  if (roles && !auth.hasAnyPermission(roles)) {
    return router.createUrlTree(['/not-authorized']);
  }

  return true;
};