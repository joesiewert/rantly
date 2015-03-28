import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'custom-session',
  before: 'simple-auth',

  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var id = this.get('id');

        if (!Ember.isEmpty(id)) {
          return container.lookup('store:main').find('user', id).then(function(user) {
            this.set('currentUser', user);
          }.bind(this));
        }
      }.observes('id')
    });
  }
};
