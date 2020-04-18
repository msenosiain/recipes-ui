import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipe.service';
import { environment } from 'src/environments/environment';
import { IRecipeList } from '../../recipe.types';
import { takeUntil } from 'rxjs/operators';
import { BaseUnsubscriber } from 'src/app/@core/classes/BaseUnsubscriber';

@Component({
  selector: 'rcp-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent extends BaseUnsubscriber implements OnInit {
  recipesList: IRecipeList;
  imagesApiUrl = `${environment.imagesApiUrl}/`;

  constructor(private recipesService: RecipesService) {
    super();
  }

  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((recipesList: IRecipeList) => {
        this.recipesList = recipesList;
      });
  }
}
