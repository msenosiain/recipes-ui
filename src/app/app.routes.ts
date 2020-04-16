import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './@recipes/recipes.module#RecipesModule'
  }
];
