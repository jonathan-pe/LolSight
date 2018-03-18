import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | summoner', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:summoner');
    assert.ok(route);
  });
});
