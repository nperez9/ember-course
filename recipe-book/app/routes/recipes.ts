import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type RecipeDataService from 'recipe-book/services/recipe-data';
import type Store from '@ember-data/store';

export default class RecipesRoute extends Route {
  @service declare store: Store;
  @service declare recipeData: RecipeDataService;

  async model() {
    await this.recipeData.loadRecipes();
    // return all the recipes in the store
    return this.store.peekAll('recipes');
  }
}
