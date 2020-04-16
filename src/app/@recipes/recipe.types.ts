export interface IIngredient {
  name: string;
  quantity?: number;
  unit?: string;
}

export interface IRecipe {
  id: string;
  title: string;
  categories: string[];
  ingredients: IIngredient[];
  image: string;
  procedure: string;
}

export interface IRecipeList {
  total: number;
  items: IRecipe[];
}
