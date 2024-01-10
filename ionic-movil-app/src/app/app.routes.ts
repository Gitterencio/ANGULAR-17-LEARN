import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'main',
    loadComponent:() => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  //{
  //  path: 'home',
  //  loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  //},
  //{
  //  path: '',
  //  redirectTo: 'home',
  //  pathMatch: 'full',
  //},
  //{
  //  path: 'main',
  //  loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  //},
];
