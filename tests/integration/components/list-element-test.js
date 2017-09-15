import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let list = Ember.Object.create({
  title: "First",
  tasks: [{title: 'A Task', isActive: true}]
})

moduleForComponent('list-element', 'Integration | Component | list element', {
  integration: true
});

test('it renders', function(assert) {

  this.set('list', list);
  this.render(hbs`{{list-element list=list}}`);

  assert.equal(this.$(".list-title").text().trim(), 'First');
  assert.equal(this.$(".task-title p").text().trim(), 'A Task');

});
