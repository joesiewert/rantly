import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  rants: DS.hasMany('rant'),

  rantCount: function() {
    return this.get('rants').length;
  }.property('rants')
});
