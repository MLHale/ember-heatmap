import Ember from 'ember';
import layout from '../templates/components/ember-heatmap';

export default Ember.Component.extend({
  layout,
  testvar: 1,
  setupHeatmap: Ember.on('didInsertElement', function() {

  }),

  teardownHeatmap: Ember.on('willDestroyElement', function() {
    this.get('ember-heatmap').destroy();
  }),
});
