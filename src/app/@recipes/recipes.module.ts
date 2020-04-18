import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { recipesRoutes } from './recipes.routes';

import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './shared/recipe.resolver';

const AngularMaterialModules = [MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [RecipesListComponent, RecipeCreateComponent, RecipeDetailsComponent, RecipeEditComponent],
  imports: [CommonModule, RouterModule.forChild(recipesRoutes), FlexLayoutModule, ...AngularMaterialModules],
  providers: [RecipeResolver]
})
export class RecipesModule {}
