import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | champions-table', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{champions-table}}`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#champions-table}}
        template block text
      {{/champions-table}}
    `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
