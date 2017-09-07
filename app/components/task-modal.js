import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    toggleModal() {
      this.sendAction('toggleModal');
    },
    handleDelete() {
      let title = this.get('task').get('title');
      let confirmDelete = confirm(`Do you want to delete ${title}?`);
      if (confirmDelete) {
        this.get('task').set('isDeleted', true);
        this.sendAction('toggleModal');
      }
    },
    handleComplete() {
      this.sendAction('toggleModal');
      this.get('task').set('isCompleted', true);

    }
  }
});
