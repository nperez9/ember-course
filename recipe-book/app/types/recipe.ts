export interface Recipe {
  id?: string;
  title: string;
  description: string;
  instructions: string;
  ingredients: string[];
}

export interface RecipeParams {
  recipe_id: string;
}
