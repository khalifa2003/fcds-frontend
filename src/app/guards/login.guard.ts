import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const LoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true; // Allow access if not authenticated
  } else {
    router.navigate(['/dashboard']); // Redirect authenticated users (update target route as needed)
    return false;
  }
};
