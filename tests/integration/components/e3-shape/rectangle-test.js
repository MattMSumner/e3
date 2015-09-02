import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import contextShim from '../../../helpers/context-shim';

moduleForComponent('e3-shape/rectangle', 'Integration | Component | e3 shape/rectangle', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('context', contextShim());
  this.render(hbs`{{e3-shape/rectangle context}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#e3-shape/rectangle context}}
      template block text
    {{/e3-shape/rectangle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
