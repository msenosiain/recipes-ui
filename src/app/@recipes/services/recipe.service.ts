import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRecipe, IRecipeList } from '../recipe.types';
import { map } from 'rxjs/operators';
import { IApiResponse } from 'src/app/@core/core.types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}

  public RECIPES_API_URL = `${environment.apiUrl}/recipes`;

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
