import Ember from 'ember';

export default Ember.Controller.extend({
  pendingAddList: false,
  shouldBubble: true,
  newListTitle: '',
  mockId() {
    return Math.random().toString(36).substr(2, 10)
  },

  actions: {
    stopProp(){},

    toggleEdit() {
      this.toggleProperty('pendingAddList');
      this.toggleProperty('shouldBubble');
    },

    addNewList(input) {
      let title = input.replace(/[<>\"]/g,'-').replace(/[/']/g,'\'');
      let listData = {title, id: this.mockId()};
      this.send('toggleEdit');
      this.set('newListTitle', '');
      return this.store.createRecord('task-list', listData);
    },

    addNewTask(title, list) {
      let taskData = {title, list, id: this.mockId()};
      return this.store.createRecord('task-item', taskData);
    }
  }
});
