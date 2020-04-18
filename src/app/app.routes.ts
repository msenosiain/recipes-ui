import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: './@recipes/recipes.module#RecipesModule'
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];
