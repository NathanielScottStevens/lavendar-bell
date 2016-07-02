import { test } from 'qunit';
import moduleForAcceptance from 'lavender-bell/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | lavender bell');


test('should visit home when clicked', function(assert) {
  visit('/about');
  click('a:contains("home")');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should visit about when clicked', function(assert) {
  visit('/');
  click('a:contains("about")');
  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('should visit portfolio when clicked', function(assert) {
  visit('/');
  click('a:contains("portfolio")');
  andThen(function () {
    assert.equal(currentURL(), '/portfolio');
  });
});

test('should visit info-pricing when clicked', function(assert) {
  visit('/');
  click('a:contains("pricing")');
  andThen(function() {
    assert.equal(currentURL(), '/info-pricing');
  });
});

test('should visit contact when clicked', function(assert) {
  visit('/');
  click('a:contains("contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('should visit blog when clicked', function(assert) {
  visit('/');
  click('a:contains("blog")');
  andThen(function() {
    assert.equal(currentURL(), '/blog');
  });
});
