import Model, { attr } from '@ember-data/model';

// data model to use, like orm
export default class RecipesModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') instructions;
  @attr('array') ingredients;
}
