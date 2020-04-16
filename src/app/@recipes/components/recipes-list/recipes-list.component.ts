import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipe.service';
import { IRecipe, IRecipeList } from '../../recipe.types';

@Component({
  selector: 'rcp-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipesList: IRecipeList;
  imageBaseUrl = 'http://localhost:3000/api/images/';

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((recipesList: IRecipeList) => {
      this.recipesList = recipesList;
    });
  }
}
