import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal-overlay'],

  actions: {
    completeChecked: false,

    toggleModal() {
      this.sendAction('toggleModal', this.get('task').get('id'));
      this.get('task').set('isCompleted', this.get('completeChecked'));
    },
    handleDelete() {
      let title = this.get('task').get('title');
      let confirmDelete = confirm(`Do you want to delete ${title}?`);
      if (confirmDelete) {
        this.get('task').set('isDeleted', true);
        this.sendAction('toggleModal', null);
      }
    }
  }
});
