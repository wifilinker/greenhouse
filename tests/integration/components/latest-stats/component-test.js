import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleForComponent('latest-stats', 'Integration | Component | latest stats', {
  integration: true,
  beforeEach: function() {
    manualSetup(this.container);
  }
});

test('it renders', function(assert) {
  this.set('stat', make('stat'));
  this.render(hbs`{{latest-stats stat=stat}}`);
  assert.equal(this.$('.humidity').text().trim(), 'Humidity is: 50%', "Humidity equals 50%");
});
