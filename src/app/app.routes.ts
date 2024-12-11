import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [{ path: '', redirectTo: '/home', pathMatch: 'full' }],
  }, // Default path

  // Product
  // {
  // path: '',
  // loadChildren: () =>
  //   import('./components/Product/product.module')
  // .then(
  //     (m) => m.ProductModule
  //   ),
  // },

  // Auth
  // {
  //   path: '',
  // loadChildren: () =>
  // import('./components/Auth/auth.module').then((m) => m.AuthModule),
  //   canActivate: [LoginGuard],
  // },

  // User
  // {
  //   path: 'user',
  // loadChildren: () =>
  //   import('./components/User/user.module').then((m) => m.UserModule),
  //   canActivate: [AuthGuard],
  // },

  // Admin
  // {
  //   path: 'admin',
  // loadChildren: () =>
  // import('./components/Admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [AdminGuard],
  // },

  { path: '**', component: NotFoundPageComponent },
];
