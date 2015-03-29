import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('date'),
  user: DS.belongsTo('user', {async: true})
});
