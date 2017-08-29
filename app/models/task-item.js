import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  isDeleted: DS.attr('boolean', {defaultValue: false}),
  list: DS.belongsTo('task-list', {async: false})
});

