import { module, test } from 'qunit';
import { setupTest } from 'recipe-book/tests/helpers';

module('Unit | Route | recipes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:recipes');
    assert.ok(route);
  });
});
