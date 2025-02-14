import { Routes } from '@angular/router';
import { DashboardMainComponent } from './features/dashboard/dashboard-main.component';
import { ProfilePageComponent } from './features/profile/profile-page.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
