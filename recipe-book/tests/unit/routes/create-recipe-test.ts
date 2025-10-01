import { module, test } from 'qunit';
import { setupTest } from 'recipe-book/tests/helpers';

module('Unit | Route | create-recipe', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:create-recipe');
    assert.ok(route);
  });
});
