import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IRecipe } from '../../recipe.types';
import { BaseUnsubscriber } from 'src/app/@core/classes/BaseUnsubscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rcp-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent extends BaseUnsubscriber implements OnInit {
  recipe: IRecipe;
  imagesApiUrl = `${environment.imagesApiUrl}/`;
  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      this.recipe = data.recipe;
    });
  }
}
