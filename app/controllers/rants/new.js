import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRant: function() {
      var title = this.get('rantTitle');
      var body = this.get('rantBody');

      var rant = this.store.createRecord('rant', {title: title, body: body});
      rant.save().then(function() {
        this.set('rantTitle', '');
        this.set('rantBody', '');
        this.transitionToRoute('rants');
      }.bind(this));
    },

    cancelRant: function() {
      this.set('rantTitle', '');
      this.set('rantBody', '');
      this.transitionToRoute('rants');
    }
  }
});
