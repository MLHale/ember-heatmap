import Ember from 'ember';

export default Ember.Controller.extend({
	heatmapdata: [],
	heatmapmax: 0,
	heatmapconfig: {
		radius: 40,
		maxOpacity: .9,
		minOpacity: 0,
		blur: .75
	},
	init(){
		this._super();
		this.get('loadHeatmapData')(this);
	},
	loadHeatmapData(controller){
		//create some random data to test the heatmap
		var points = [];
		var max = 0;
		var width = Ember.$(window).width();
		var height = Ember.$(window).height();
		var len = 400;

		while (len--) {
			var val = Math.floor(Math.random()*100);
			max = Math.max(max, val);
			var point = {
				x: Math.floor(Math.random()*width),
				y: Math.floor(Math.random()*height),
				value: val
			};
			points.push(point);
		}
		controller.set('heatmapdata', points);
		controller.set('heatmapmax', max);
	},
});
