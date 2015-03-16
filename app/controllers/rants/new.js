import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancelRant: function() {
      this.set('rantTitle', '');
      this.set('rantBody', '');
      this.transitionToRoute('rants');
    },

  }
});
