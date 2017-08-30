import Ember from 'ember';

export default Ember.Controller.extend({
  pendingAddList: false,
  shouldBubble: true,
  newListTitle: '',

  actions: {
    stopProp(){},

    toggleEdit() {
      this.toggleProperty('pendingAddList')
      this.toggleProperty('shouldBubble')
    },

    addNewTask(input) {
      let title = input.replace(/[<>\"]/g,'-').replace(/[/']/g,'\'');
      let listData = {title};
      this.send('toggleEdit');
      this.set('newListTitle', '');
      return this.store.createRecord('task-list', listData)
    }
  }
});
