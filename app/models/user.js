import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});

User.reopenClass({
  FIXTURES: [
    {id: 1, name: 'User One', email: 'user1@example.com'},
    {id: 2, name: 'User Two', email: 'user2@example.com'},
    {id: 3, name: 'User Three', email: 'user3@example.com'},
    {id: 4, name: 'User Four', email: 'user4@example.com'},
    {id: 5, name: 'User Five', email: 'user5@example.com'},
    {id: 6, name: 'User Six', email: 'user6@example.com'}
  ]
});

export default User;
