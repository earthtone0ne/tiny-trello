import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  // does isDeleted conflict with ember data 'isDeleted' property?
  isDeleted: DS.attr('boolean', {defaultValue: false}),
  isCompleted: DS.attr('boolean', {defaultValue: false}),
  list: DS.belongsTo('task-list', {async: false}),
  isActive: function() {
    let inactive = this.get('isDeleted') || this.get('isCompleted');
    return !inactive;
  }.property('isDeleted', 'isCompleted')
});

