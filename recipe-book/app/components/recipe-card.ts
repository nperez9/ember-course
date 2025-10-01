import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import type RecipeDataService from 'recipe-book/services/recipe-data';

interface RecipeCardArgs {
  id: string;
}

export default class RecipeCardComponent extends Component<RecipeCardArgs> {
  @service declare recipeData: RecipeDataService;
  @tracked isExpanded = false;
  @tracked isFavorite = false;

  // @ts-ignore
  // get isFavorite(): boolean {
  //   return this.recipeData.isRecipeFavorite(this.args.id);
  // }

  constructor() {
    super(...arguments);
    this.isFavorite = this.recipeData.isRecipeFavorite(this.args.id);
  }

  @action
  toggleFavorite(event: Event) {
    // avoid that the card expands
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.recipeData.setFavorite(this.args.id, this.isFavorite);
  }

  @action
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
