import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rants', {path: '/'}, function() {
    this.route('search');
    this.route('new');
  });

  this.route('users');
  this.route('signup');
});

export default Router;
