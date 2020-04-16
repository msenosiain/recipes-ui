import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe, IRecipeList } from '../recipe.types';
import { map } from 'rxjs/operators';
import { IApiResponse } from 'src/app/@core/core.types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}

  public RECIPES_API_URL = 'http://localhost:3000/api/recipes';

  getRecipes(): Observable<IRecipeList> {
    return this.httpClient.get(this.RECIPES_API_URL).pipe(
      map((res: IApiResponse) => {
        return res.data as IRecipeList;
      })
    );
  }

  getRecipe(id: string): Observable<IRecipe> {
    return this.httpClient.get(`${this.RECIPES_API_URL}/${id}`).pipe(
      map((res: IApiResponse) => {
        return res.data as IRecipe;
      })
    );
  }
}
