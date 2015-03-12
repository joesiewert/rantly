import DS from 'ember-data';

var Rant = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Rant.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Rant One', body: 'This is the first rant.'},
    {id: 2, title: 'Rant Two', body: 'This is the second rant.'},
    {id: 3, title: 'Rant Three', body: 'This is the third rant.'}
  ]
});

export default Rant;
