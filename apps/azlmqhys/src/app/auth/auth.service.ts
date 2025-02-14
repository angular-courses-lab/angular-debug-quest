import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  isAuthenticated = signal(false);

  login(): void {
    this.isAuthenticated.set(true);
    this.router.navigate(['/']);
  }

  signOut(): void {
    this.isAuthenticated.set(false);
  }
}
