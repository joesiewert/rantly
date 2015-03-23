import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
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
        this.set('username', '');
        this.set('name', '');
        this.set('email', '');
        this.set('password', '');
        this.transitionToRoute('rants');
      }.bind(this));
    }
  }
});
