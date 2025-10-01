import Service, { inject as service } from '@ember/service';
import type { Recipe } from 'recipe-book/types/recipe';

export default class RecipeDataService extends Service {
  @service store: any;

  async loadRecipes() {
    const response = await fetch('/api/recipes.json');
    const storedRecipe = JSON.parse(localStorage.getItem('recipes') || '[]');

    const data = await response.json();
    return [...data.recipes, ...storedRecipe].map((recipe: any) => {
      // checks if the current receipe exist in the store
      const existingRecipe = this.store.peekRecord('recipes', recipe.id);

      if (existingRecipe) {
        return existingRecipe;
      }

      return this.store.createRecord('recipes', recipe);
    });
  }

  async saveRecipe(recipe: Recipe) {
    const storedRecipe = JSON.parse(localStorage.getItem('recipes') || '[]');
    storedRecipe.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(storedRecipe));
    const newRecipe = this.store.createRecord('recipes', recipe);
    return newRecipe.save();
  }

  getFavorites(): string[] {
    const storedRecipe = JSON.parse(localStorage.getItem('favorites') || '[]');
    return storedRecipe;
  }

  isRecipeFavorite(recipeId: string): boolean {
    const storedRecipe = this.getFavorites();
    return storedRecipe.includes(recipeId);
  }

  setFavorite(recipeId: string, isFavorite: boolean) {
    let storedRecipe = this.getFavorites();
    if (isFavorite) {
      // check if the recipeId is already in the list
      if (storedRecipe.includes(recipeId)) {
        return;
      }
      storedRecipe.push(recipeId);
    } else {
      storedRecipe = storedRecipe.filter((id: string) => id !== recipeId);
    }

    localStorage.setItem('favorites', JSON.stringify(storedRecipe));
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:recipe-data')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('recipe-data') declare altName: RecipeDataService;`.
declare module '@ember/service' {
  interface Registry {
    'recipe-data': RecipeDataService;
  }
}
