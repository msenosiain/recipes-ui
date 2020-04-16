import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from '../services/recipe.service';
import { IRecipe } from '../recipe.types';

@Injectable()
export class RecipeResolver implements Resolve<IRecipe> {
  constructor(private recipeService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IRecipe> {
    return this.recipeService.getRecipe(route.params.id);
  }
}
