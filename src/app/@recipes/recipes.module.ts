import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { recipesRoutes } from './recipes.routes';

@NgModule({
  declarations: [RecipesListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeEditComponent],
  imports: [RouterModule.forChild(recipesRoutes)]
})
export class RecipesModule {}
