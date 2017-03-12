import Ember from 'ember';
const { computed } = Ember;
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  latestStat: computed('model', function() {
    return this.get('model').get('firstObject');
  }),
  giveWater: task(function * () {
    console.log('Doing!!');
    yield timeout(1000);
    console.log('So nice!');
  }).drop()
});
