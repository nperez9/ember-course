import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type RecipeDataService from 'recipe-book/services/recipe-data';
import type { Recipe } from 'recipe-book/types/recipe';

export default class FavoritesRoute extends Route {
  @service declare recipeData: RecipeDataService;
  @service declare store: any;

  async model() {
    await this.recipeData.loadRecipes();
    const favoritesIds = this.recipeData.getFavorites();
    return this.store.peekAll('recipes').filter((recipe: Recipe) => favoritesIds.includes(recipe.id as string));
  }
}
