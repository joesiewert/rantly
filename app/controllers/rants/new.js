import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  errorMessages: [],

  validations: {
    rantTitle: {
      presence: {message: 'Rants need a title'}
    },
    rantBody: {
      length: {minimum: 144, messages: {tooShort: 'Rants need to be at least 144 characters'}}
    }
  },

  actions: {
    saveRant: function() {
      if (this.get('isValid') === true) {
        this.set('errorMessages', []);
        var title = this.get('rantTitle');
        var body = this.get('rantBody');

        var rant = this.store.createRecord('rant', {title: title, body: body});
        rant.save().then(function() {
          this.set('rantTitle', '');
          this.set('rantBody', '');
          this.transitionToRoute('rants');
        }.bind(this));
      } else {
        this.set('errorMessages', [(this.get('errors.rantTitle')[0]), (this.get('errors.rantBody')[0])]);
      }
    },

    cancelRant: function() {
      this.set('rantTitle', '');
      this.set('rantBody', '');
      this.transitionToRoute('rants');
    }
  }
});
