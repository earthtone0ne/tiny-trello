
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('default-board', 'helper:default-board', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {


  this.render(hbs`{{default-board }}`);

  assert.equal(this.$().text().trim(), 'AllTheThings');
});

