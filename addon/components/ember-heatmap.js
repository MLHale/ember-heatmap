import { observer } from '@ember/object';
import $ from 'jquery';
import { on } from '@ember/object/evented';
import Component from '@ember/component';
import layout from '../templates/components/ember-heatmap';
import h337 from 'npm:heatmapjs'

export default Component.extend({
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
  setupHeatmap: on('didInsertElement', function() {
    //initiate heatmapjs root object by appending to this component

    var config = this.get('config');
    config.container = $('#'+this.get('elementId')).get(0);
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

  dataChanged: observer('data.@each', function(){
    //incremental update would be better
    // console.log('date changed');
    var data = this.get('data');
    if (this.get('hasRendered')){
      if (this.get('swappable')) {
        this.get('map').setData({
          max: this.get('max'),
          min: this.get('min'),
          data: this.get('data')
        });
      } else {
        this.get('map').addData(data.objectAt(data.length - 1));
      }
    }
  }),

  teardownHeatmap: on('willDestroyElement', function() {
    var data = {
      max: 100,
      min: 0,
      data: []
    };
    this.get('map').setData(data);
    this.destroy()
  }),
});
