import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | applicatie filmliefhebbers', function(hooks) {
  setupApplicationTest(hooks);

  test('should show collecties as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/collectie', 'should redirect automatically');
  });
  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
    
  test('should link to about.', async function (assert) {
    await visit('/');
    await click(".menu-opgeslagen");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
    
  test('should list available rentals.', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });
    
  test('should filter the list of rentals by city.', async function (assert) {
  });
    
  test('should show details for a selected rental', async function (assert) {
  });
});