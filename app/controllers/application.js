import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchRants: function() {
      var query = this.get('query').toLowerCase();
      this.transitionToRoute('rants.search', {queryParams: {query: query}});
    }
  }
});
