import { setupTest } from 'recipe-book/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | recipes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('recipes', {});
    assert.ok(model, 'model exists');
  });
});
