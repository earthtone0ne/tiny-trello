import Ember from 'ember';

export default Ember.Component.extend({

init () {
    this._super(...arguments);
  },

  store: Ember.inject.service(),
  newTaskTitle: '',
  modalTask: null,
  showModal: false,

  actions: {
    handleAddTask() {
      let add = this.get('addTask');
      let title = this.get('newTaskTitle').replace(/[<>\"]/g,'-').replace(/[/']/g,'\'');
      add(title, this.get('list'));
      this.set('newTaskTitle', '');
    },
    toggleModal(id) {
      let showing = Boolean(this.get('modalTask'))
      this.set('showModal', !showing);
      this.set('modalTask', showing ? null : id);
    },
  }
});
