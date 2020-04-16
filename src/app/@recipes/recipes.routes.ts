import { Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { PendingChangesGuard } from '../@core/guards/pending-changes.guard';
import { RecipeResolver } from './shared/recipe.resolver';

export const recipesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipesListComponent
      },
      {
        path: 'add',
        component: RecipeCreateComponent,
        canDeactivate: [PendingChangesGuard]
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: RecipeDetailsComponent,
            resolve: {
              recipe: RecipeResolver
            }
          },
          {
            path: 'edit',
            component: RecipeEditComponent,
            canDeactivate: [PendingChangesGuard],
            resolve: {
              recipe: RecipeResolver
            }
          }
        ]
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404'
  }
];
