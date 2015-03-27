import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showErrors: function() {
      var errors = this.get('errors')[0];
      if (errors === undefined) {
        this.set('showError', false);
      } else {
        this.set('showError', true);
      }
    }
  }
});
