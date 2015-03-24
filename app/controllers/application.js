import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  loginError: false,

  actions: {
    authenticate: function() {
      this._super().then(
        function() {
          this.set('loginError', false);
        }.bind(this),
        function() {
          this.set('loginError', true);
        }.bind(this)
      );
    },

    searchRants: function() {
      var query = this.get('query');
      this.transitionToRoute('rants.search', {queryParams: {query: query}});
    }
  }
});
