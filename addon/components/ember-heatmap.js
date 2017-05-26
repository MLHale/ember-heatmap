import Ember from 'ember';
import layout from '../templates/components/ember-heatmap';

export default Ember.Component.extend({
  layout,
  map: null,
  setupHeatmap: Ember.on('didInsertElement', function() {
    //initiate heatmapjs root object by appending to this component

    var config = {
      container: Ember.$('#'+this.get('elementId')).get(0),
      radius: 10,
      maxOpacity: .5,
      minOpacity: 0,
      blur: .75
    };
    var map = h337.create(config);
    this.set('map', map);
  }),

  teardownHeatmap: Ember.on('willDestroyElement', function() {
    this.get('ember-heatmap').destroy();
  }),
});
