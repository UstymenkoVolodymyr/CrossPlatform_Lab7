import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'lab2',
    loadComponent: () => import('./lab2/lab2.page').then( m => m.Lab2Page)
  },
  {
    path: 'lab3',
    loadComponent: () => import('./lab3/lab3.page').then( m => m.Lab3Page)
  },
  {
    path: 'lab4',
    loadComponent: () => import('./lab4/lab4.page').then( m => m.Lab4Page)
  },
  {
    path: 'lab6',
    loadComponent: () => import('./lab6/lab6.page').then( m => m.Lab6Page)
  },
  {
    path: 'lab7',
    loadComponent: () => import('./lab7/lab7.page').then( m => m.Lab7Page)
  },
];
