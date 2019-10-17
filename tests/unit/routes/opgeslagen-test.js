import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | opgeslagen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:opgeslagen');
    assert.ok(route);
  });
});
