import Ember from 'ember';
import layout from '../templates/components/ember-heatmap';

export default Ember.Component.extend({
  layout,
  map: null,

  //Heatmap js config object
  config: {
    radius: 10,
    maxOpacity: .5,
    minOpacity: 0,
    blur: .75
  },

  //Data to be placed in the heatmap
  data: [],
  min: 0,
  max: 100,

  //set after heatmap is initialized
  hasRendered: false,
  classNames: ['heatmap-wrapper',],
  setupHeatmap: Ember.on('didInsertElement', function() {
    //initiate heatmapjs root object by appending to this component

    var config = this.get('config');
    config.container = Ember.$('#'+this.get('elementId')).get(0);
    var map = h337.create(config);
    if(this.get('data')){
      map.setData({
        max: this.get('max'),
        min: this.get('min'),
        data: this.get('data')
      });
    }
    this.set('map', map);
    this.set('hasRendered', true);
  }),

  dataChanged: Ember.observer('data', function(){
    //handling incremental update would be better
    if (this.get('hasRendered')){
      this.get('map').setData({
        max: this.get('max'),
        min: this.get('min'),
        data: this.get('data')
      });
      // this.get('map').repaint()
    }
  }),

  teardownHeatmap: Ember.on('willDestroyElement', function() {
    this.get('ember-heatmap').destroy();
  }),
});
