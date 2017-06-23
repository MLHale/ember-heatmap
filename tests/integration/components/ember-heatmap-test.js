import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-heatmap', 'Integration | Component | ember heatmap', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-heatmap}}`);

  assert.equal(this.$().text().trim(), '');

});

test('heatmap created', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-heatmap}}`);

  assert.notEqual(this.$('.heatmap-wrapper').has('canvas').length, 0);

});

test('data set', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var data = [{x: 10, y:10, value:20}];

  this.render(hbs`{{ember-heatmap}}`);
  this.set('data', data);
  //assert.deepEqual(this.get('data')[0], {x: 10, y:10, value:20});
  assert.deepEqual(this.get('data')[0], {x: 10, y:10, value:20});
});
