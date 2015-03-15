import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editRant: function() {
      this.set('isEditing', true);
    },

    cancelRant: function() {
      this.set('isEditing', false);
    },

  }
});
