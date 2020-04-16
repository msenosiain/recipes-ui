import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipesService } from './recipe.service';
import { IIngredient, IRecipe } from '../recipe.types';

fdescribe('RecipeService', () => {
  let recipeService: RecipesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipesService]
    });

    recipeService = TestBed.get(RecipesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getRecipe', () => {
    it('should return an Observable<IRecipe>', () => {
      const ingredientMock = {
        name: 'TestIngredient',
        quantity: 1,
        unit: 'TestUnit'
      } as IIngredient;
      const recipeMock = {
        id: 'recipeId',
        title: 'Test Recipe',
        categories: ['TestCat1, TestCat2'],
        ingredients: [ingredientMock],
        procedure: 'TestProcedure',
        image: 'TestImage'
      } as IRecipe;

      recipeService.getRecipe('recipeId').subscribe(recipe => {
        expect(recipe).toEqual(recipeMock);
      });

      httpMock.expectOne(`${recipeService.RECIPES_API_URL}/recipeId`).flush(recipeMock);
    });
  });
});
