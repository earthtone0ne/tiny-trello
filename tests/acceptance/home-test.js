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
  visit('/');
  click('.add-list');
  fillIn('.add-list input','NewOne');
  keyEvent('.add-list input', 'keyup', 13);
  andThen(function() {
    assert.equal(find('.list-title').last().text().trim().slice(0,6), 'NewOne', 'adds new list');
    assert.equal(find('.list-title').length, 2, 'now two lists');
  })
});

test('adds new tasks', function(assert){
  visit('/');
  click('.add-task');
  fillIn('.add-task input','The Thing');
  keyEvent('.add-task input', 'keyup', 13);
  andThen(function() {
    assert.equal(find('.task-title').last().text().trim(), 'The Thing', 'adds new task');
    assert.equal(find('.task-title').length, 2, 'now two tasks');
  })
});

test('edits tasks', function(assert){
  visit('/');
  click('.add-task');
  fillIn('.add-task input','Thing');
  keyEvent('.add-task input', 'keyup', 13);
  click('.task-title');
  click('.modal-input');
  fillIn('.modal-input','New');
  andThen(function() {
    assert.equal(find('.task-title').first().text().trim(), 'New', 'new first title');
    assert.equal(find('.task-title').last().text().trim(), 'Thing', 'same last title');
  })
});

// test('deletes tasks', function(assert){
// // TODO: implement spy for window.alert, or (better)change to modal. Qunit can't test alerts.
//   visit('/');
//   click('.task-title');
//   click('button');
//   keyEvent('.modal','keyup', 9);
//   keyEvent('.modal', 'keyup', 13);
//   andThen(function() {
//     assert.equal(find('.task-title').length, 0, 'deleted task')
//   })
// })
