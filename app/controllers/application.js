import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  actions: {
    searchRants: function() {
      var query = this.get('query');
      this.transitionToRoute('rants.search', {queryParams: {query: query}});
    }
  }
});
