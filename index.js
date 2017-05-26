/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-heatmap',
  options: {
    nodeAssets: {
      'heatmapjs' : {
        vendor: {
          destDir: 'heatmapjs',
          include: ['heatmap.js']
        }
      }
    }
  },
  isDevelopingAddon: function() {
    return true;
  },
  included: function(parent) {
    this.addonOptions = parent.options && parent.options.myAddon || {};
    this.addonOptions.theme = this.addonOptions.theme || 'light';
    this._super.included.apply(this, arguments);
    this.import('vendor/heatmapjs/heatmap.js');
  },
};
