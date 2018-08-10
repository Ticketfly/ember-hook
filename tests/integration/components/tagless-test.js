import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import {HookMixin} from 'ember-hook';

moduleForComponent('ember-hook', 'Integration | Component | tagless', {
  integration: true
});

test('ember-hook does not tag less component', function(assert) {

  this.register('component:tag-less', Ember.Component.extend(HookMixin, {
    tagName: ''
  }));

  this.render(hbs`
    {{#tag-less}}
      template block text
    {{/tag-less}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
