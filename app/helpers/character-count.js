import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(characterCount) {
  switch (characterCount) {
    case undefined:
      return '0 Characters';
    case 1:
      return '1 Character';
    default:
      return characterCount + ' Characters';
  }
});
