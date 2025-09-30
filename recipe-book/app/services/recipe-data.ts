import Service, { inject as service} from '@ember/service';

export default class RecipeDataService extends Service {
  @service store: any

  async loadRecipes() {
    const response = await fetch('/api/recipes.json');
    const data = await response.json();
    return data.recipes.map((recipe: any) => {
      // checks if the current receipe exist in the store
      const existingRecipe = this.store.peekRecord('recipes', recipe.id);

      if (existingRecipe) {
        return existingRecipe;
      }

      return this.store.createRecord('recipes', recipe);
    });
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
