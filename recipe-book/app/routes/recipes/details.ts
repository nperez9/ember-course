import Route from '@ember/routing/route';

interface RecipeDetailsParams {
  recipe_id: string;
}

export default class RecepiesDetailsRoute extends Route {
  async model(params: RecipeDetailsParams) {
    return "null";
  }
}
