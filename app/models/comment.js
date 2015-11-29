import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  userId: DS.attr('number'),
  auditionId: DS.attr('number'),
  postDate: DS.attr('date'),
  user: DS.belongsTo('user', {async: true})
});
