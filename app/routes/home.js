import Ember from 'ember';
import defaultBoard from '../helpers/default-board';

export default Ember.Route.extend({
  model() {
    return {
      board: "Current Board: '" + defaultBoard.compute() + "'",
      lists: [{
        title: 'To Start'
      }]
    }
  }
});
