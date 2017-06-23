# Ember Heatmap [![Build Status](https://travis-ci.org/MLHale/ember-heatmap.svg?branch=master)](https://travis-ci.org/MLHale/ember-heatmap) [![Ember Observer Score](http://emberobserver.com/badges/ember-heatmap.svg)](http://emberobserver.com/addons/ember-heatmap) [![npm version](https://badge.fury.io/js/ember-heatmap.svg)](https://badge.fury.io/js/ember-heatmap)

Ember heatmap is a small Ember Addon that componentizes [heatmap.js](https://github.com/pa7/heatmap.js) for consumption and use in ember apps.

## Installation

```bash
ember install ember-heatmap
```

## Demo

http://mlhale.github.io/ember-heatmap-demo/

## Usage

Ember heatmap may be invoked as:

```hbs
{{ember-heatmap config=configObj data=dataPts min=minValue max=maxValue}}
```

Where:
* ```configObj``` is an object containing anyone of the following keys defined by heatmap.js
	* ```container``` (DOMNode) *required*  - A DOM node where the heatmap canvas should be appended (heatmap will adapt to the node's size)
	* ```backgroundColor``` (string) *optional* - A background color string in form of hexcode, color name, or rgb(a)
	* ```gradient``` (object) *optional* - An object that represents the gradient (syntax: number string [0,1] : color string), check out the example
	* ```radius``` (number) *optional* - The radius each datapoint will have (if not specified on the datapoint itself)
	* ```opacity``` (number) [0,1] *optional* default = .6 - A global opacity for the whole heatmap. This overrides maxOpacity and minOpacity if set!
	* ```maxOpacity``` (number) [0,1] *optional* - The maximal opacity the highest value in the heatmap will have. (will be overridden if opacity set)
	* ```minOpacity```(number) [0,1] *optional* - The minimum opacity the lowest value in the heatmap will have (will be overridden if opacity set)
	* ```onExtremaChange``` function callback - Pass a callback to receive extrema change updates. Useful for DOM legends.
	* ```blur``` (number) [0,1] *optional* default = 0.85 - The blur factor that will be applied to all datapoints. The higher the blur factor is, the smoother the gradients will be
	* ```xField``` (string) *optional* default = "x" - The property name of your x coordinate in a datapoint
	* ```yField``` (string) *optional* default = "y" - The property name of your y coordinate in a datapoint
	* ```valueField``` (string) *optional* default = "value" - The property name of your y coordinate in a datapoint
* ```dataPts``` is an array of ```DataPoint``` objects
	* a ```DataPoint``` is of type ```{x:xVal, y:yVal, value:val}```
* ```minValue``` is a number representing the minimum value a data point can take on (used for scaling the heatmap indicators)
* ```maxValue``` is a number representing the maxmimum value a data point can take on (used for scaling the heatmap indicators)

## Example
in ```./app/controllers/application.js```:

```js
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
```

in ```./app/templates/application.hbs```:
```hbs
{{ember-heatmap config=heatmapconfig data=heatmapdata max=heatmapmax}}
```

This should produce the following (for an empty ember app):
![Example Screenshot](docs/example.png)

## Heatmap.js documentation
More examples and the full heatmap.js documentation can be found at https://www.patrick-wied.at/static/heatmapjs/docs.html

## License
The MIT License (MIT)

Copyright (c) [Matthew L. Hale](http://www.mlhale.com/) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
