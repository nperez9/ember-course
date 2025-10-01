import Controller from '@ember/controller';
import { action } from '@ember/object';
import type RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';
import type RecipeDataService from 'recipe-book/services/recipe-data';
import type { Recipe } from 'recipe-book/types/recipe';

export default class CreateRecipeController extends Controller {
  title = '';
  description = '';
  ingredients = '';
  instructions = '';

  @service declare recipeData: RecipeDataService;
  @service declare router: RouterService;

  @action
  updateTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.title = input.value;
  }

  @action
  updateDescription(event: Event) {
    const input = event.target as HTMLInputElement;
    this.description = input.value;
  }

  @action
  updateIngredients(event: Event) {
    const input = event.target as HTMLInputElement;
    this.ingredients = input.value;
  }

  @action
  updateInstructions(event: Event) {
    const input = event.target as HTMLInputElement;
    this.instructions = input.value;
  }

  @action
  submitRecipe(event: Event) {
    event.preventDefault();
    const newRecipe: Partial<Recipe> = {
      id: crypto.randomUUID(),
      title: this.title,
      description: this.description,
      ingredients: this.ingredients.split(',').map((ing) => ing.trim()),
      instructions: this.instructions,
    };

    this.recipeData.saveRecipe(newRecipe as Recipe);
    this.router.transitionTo('recipes');
  }
}
