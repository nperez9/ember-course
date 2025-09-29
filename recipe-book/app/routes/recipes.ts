import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service store: any;

  async model() {
    const response = await fetch('/api/recipes.json');
    const data = await response.json();
    return data.recipes.map((recipe: any) =>
      this.store.createRecord('recipes', recipe),
    );
  }
}
