import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { PendingChangesGuard } from '../@core/guards/pending-changes.guard';

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
                path: ':recipeId',
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
