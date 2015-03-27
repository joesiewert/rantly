import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    username: {
      format: {with: /^\S*$/, message: "Username can't be blank or contain spaces"}
    },
    name: {
      presence: {message: "Name can't be blank"}
    },
    email: {
      format: {with: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: 'Must be a valid email address'}
    },
    password: {
      length: {minimum: 8, messages: {tooShort: 'Must be at least 8 characters'}}
    }
  },

  actions: {
    createUser: function() {
      if (this.get('isValid') === true) {
        var username = this.get('username');
        var name = this.get('name');
        var email = this.get('email');
        var password = this.get('password');

        var user = this.store.createRecord('user', {
          username: username,
          name: name,
          email: email,
          password: password
        });

        user.save().then(function() {
          this.get('session').authenticate('simple-auth-authenticator:devise', {
            identification: email,
            password: password
          });
          this.set('username', '');
          this.set('name', '');
          this.set('email', '');
          this.set('password', '');
          this.transitionToRoute('rants');
        }.bind(this));
      }
    }
  }
});
