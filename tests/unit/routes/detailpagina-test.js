import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | detailpagina', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:detailpagina');
    assert.ok(route);
  });
});
