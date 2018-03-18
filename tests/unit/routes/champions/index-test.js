import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | champions/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:champions/index');
    assert.ok(route);
  });
});
