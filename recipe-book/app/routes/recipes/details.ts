import type Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type RecipeDataService from 'recipe-book/services/recipe-data';

interface RecipeDetailsParams {
  recipe_id: string;
}

export default class RecipesDetailsRoute extends Route {
  @service declare store: Store;
  @service declare recipeData: RecipeDataService;

  async model({ recipe_id }: RecipeDetailsParams) {
    await this.recipeData.loadRecipes();
    return this.store.peekRecord('recipes', recipe_id);
  }
}
