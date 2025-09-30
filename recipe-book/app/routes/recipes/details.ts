import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

interface RecipeDetailsParams {
  recipe_id: string;
}

export default class RecipesDetailsRoute extends Route {
  @service store: any;
  @service recipeData: any;

  async model({ recipe_id }: RecipeDetailsParams) {
    await this.recipeData.loadRecipes();
    return this.store.peekRecord('recipes', recipe_id);
  }
}
