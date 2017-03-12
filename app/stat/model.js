import Ember from 'ember';
import DS from 'ember-data';

const {computed} = Ember;

export default DS.Model.extend({
  humidity: DS.attr('number'),
  temperature: DS.attr('number'),
  soilHumidity: DS.attr('number'),
  light: DS.attr('number'),

  formatedHumidity: computed('humidity', function() {
    return `${this.get('humidity')*100}%`;
  }),
  formatedTemperature: computed('temperature', function() {
    return `${this.get('temperature')}℃`;
	
  }),
});
