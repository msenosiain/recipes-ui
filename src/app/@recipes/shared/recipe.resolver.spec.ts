/*
 * Copyright (c) 2018 Sensormatic Electronics, LLC. All rights reserved.
 * Reproduction is forbidden without written approval of Sensormatic Electronics, LLC.
 */

import { TestBed } from '@angular/core/testing';
import { RecipeResolver } from './recipe.resolver';
import { ReplaySubject, of } from 'rxjs';
import { RecipesService } from '../services/recipe.service';
import { IRecipe } from '../recipe.types';

describe('Recipe resolver', () => {
  let resolver: RecipeResolver;
  let recipeService: RecipesService;

  const recipe: IRecipe = {
    id: 'id'
  } as IRecipe;

  const route = {
    params: {
      id: recipe.id
    }
  } as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecipeResolver,
        {
          provide: RecipesService,
          useValue: {
            getRecipe: jasmine.createSpy('getRecipe').and.returnValue(of(recipe))
          }
        }
      ]
    });

    resolver = TestBed.inject(RecipeResolver);
    recipeService = TestBed.inject(RecipesService);
  });

  describe('when resolve a route', () => {
    it('should return the recipe', () => {
      resolver.resolve(route).subscribe(f => {
        expect(f).toEqual(recipe);
      });
    });
  });
});
