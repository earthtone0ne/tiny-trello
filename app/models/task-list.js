import DS from 'ember-data';
import defaultBoard from '../helpers/default-board';

export default DS.Model.extend({
  title: DS.attr(),
  board: DS.attr('string', {defaultValue: defaultBoard.compute()}),
  tasks: DS.hasMany('task-item')
});
