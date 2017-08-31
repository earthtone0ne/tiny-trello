import Ember from 'ember';

export default Ember.Component.extend({

init () {
    this._super(...arguments);
  },

  store: Ember.inject.service(),
  newTaskTitle: '',
  showModal: false,

  actions: {
    handleAddTask() {
      let add = this.get('addTask');
      let title = this.get('newTaskTitle').replace(/[<>\"]/g,'-').replace(/[/']/g,'\'');
      add(title, this.get('list'));
      this.set('newTaskTitle', '');
    },
    toggleModal() {
      this.toggleProperty('showModal');
    },
  }
});
