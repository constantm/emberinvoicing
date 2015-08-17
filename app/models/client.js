import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	clientCode: DS.attr('string'),
	vatNr: DS.attr('string'),
	regNr: DS.attr('string'),
	address: DS.attr('string'),
	city: DS.attr('string'),
	postCode: DS.attr('string'),
	country: DS.attr('string'),
	lastViewed: DS.attr('date')
}).reopenClass({
  FIXTURES: [
    { id: 1, name: 'Constant', clientCo: 'CON01', lastViewed: new Date("2015-03-25T12:00:00") },
    { id: 2, name: 'Moira', clientCo: 'MOI01', lastViewed: new Date("2015-01-25T12:00:00") },
  ]
});
