import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service store: any;
  @service recipeData: any;

  async model() {
    await this.recipeData.loadRecipes();
    // return all the recipes in the store
    return this.store.peekAll('recipes');
  }
}
