import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editRant: function() {
      this.set('isEditing', true);
    },

    saveRant: function(rant) {
      var title = this.get('title');
      var body = this.get('body');

      rant.set('title', title);
      rant.set('body', body);
      rant.save().then(function() {
        this.set('isEditing', false);
        this.transitionToRoute('rants');
      }.bind(this));
    },

    cancelRant: function() {
      this.set('isEditing', false);
    },

  }
});
