import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(LoginControllerMixin, EmberValidations.Mixin, {
  authenticator: 'simple-auth-authenticator:devise',
  loginError: false,

  validations: {
    query: {
      presence: {message: "This can't be blank!"}
    }
  },

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
      var input = Ember.$('.nav-search-input')[0];

      if (this.get('isValid') === true) {
        input.placeholder = 'Search';
        var query = this.get('query');
        this.transitionToRoute('rants.search', {queryParams: {query: query}});
      } else {
        input.placeholder = this.get('errors.query')[0];
      }
    }
  }
});
