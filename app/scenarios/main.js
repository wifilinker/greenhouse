import {Scenario} from 'ember-data-factory-guy';

export default class extends Scenario {
  run() {
    this.mockFindAll('stat', 3);
  }
}
