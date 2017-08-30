import { test } from 'qunit';
import moduleForAcceptance from 'tiny-trello/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home board');

test('it redirects from root to home board', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home', 'should navigate to home');
  })
});

test('shows task list containers', function(assert){
  visit('/');
  andThen(function() {
    assert.notEqual(find('.list-card').length, 0, 'display at least one list');
  })
});

test('shows tasks in lists', function(assert){
  visit('/');
  andThen(function() {
    assert.notEqual(find('.task-title').length, 0, 'display at least one task');
  })
});

test('adds new lists', function(assert){

});

test('adds new tasks', function(assert){

});

test('edits tasks', function(assert){

});

test('deletes tasks', function(assert){

})
