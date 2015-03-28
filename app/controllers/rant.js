import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(EmberValidations.Mixin, {
  isEditing: false,
  errorMessages: [],

  validations: {
    title: {
      presence: {message: 'Rants need a title'}
    },
    body: {
      length: {minimum: 144, messages: {tooShort: 'Rants need to be at least 144 characters'}}
    }
  },

  actions: {
    editRant: function() {
      this.set('isEditing', true);
    },

    saveRant: function(rant) {
      if (this.get('isValid') === true) {
        this.set('errorMessages', []);
        var title = this.get('title');
        var body = this.get('body');

        rant.set('title', title);
        rant.set('body', body);
        rant.save().then(function() {
          this.set('isEditing', false);
          this.transitionToRoute('rants');
        }.bind(this));
      } else {
        this.set('errorMessages', [(this.get('errors.title')[0]), (this.get('errors.body')[0])]);
      }
    },

    cancelRant: function() {
      this.set('isEditing', false);
    },

    deleteRant: function(rant) {
      rant.deleteRecord();
      rant.save().then(function() {
        this.transitionToRoute('rants');
      }.bind(this));
    }

  }
});
