[![npm version](https://badge.fury.io/js/ember-hook.svg)](https://badge.fury.io/js/ember-hook)
[![Build Status](https://travis-ci.org/Ticketfly/ember-hook.svg?branch=master)](https://travis-ci.org/Ticketfly/ember-hook)
[![Code Climate](https://codeclimate.com/github/Ticketfly/ember-hook/badges/gpa.svg)](https://codeclimate.com/github/Ticketfly/ember-hook)
[![Test Coverage](https://codeclimate.com/github/Ticketfly/ember-hook/badges/coverage.svg)](https://codeclimate.com/github/Ticketfly/ember-hook/coverage)

# ember-hook

Way to go! You just completed a full and rigorous suite of acceptance tests for your Ember app! But wait, what is this? Your designers have overhauled the site, and now you need to update all your tests to reflect new class names? Well, #@!%!!!

Enter `ember-hook`. Rather than coupling your tests to fickle class names, it lets you use stable data attributes. Better yet, these attributes only appear when you're running your tests, keeping your source trim and simple in production.

## Installation

`ember install ember-hook`

## Usage

Use the `hook` helper to define your data attribute:

```hbs
<div class="arnt-i-pretty" data-test={{hook "foo"}}>bar</div>
```

Or the `hook` attribute in your component:

```js
export default Ember.Component.extend({
  hook: 'foo'
});
```

Then in your tests:

```js
import { hook, $hook } from 'ember-hook';

. . . .

test('my hooks work', function(assert) {
  assert.equal($hook('foo').text().trim(), 'bar'); // works
  assert.equal(find(hook('foo')).text().trim(), 'bar'); // also works
});
```

`hook` returns a string such as `[data-test="foo"]`, while `$hook` returns an actual jquery object.

### Qualifiers

Class names aren't the only fickle thing about the DOM. The DOM itself is fickle. You might be tempted to scour a parent for a child element like this:

```js
find(`${hook('item')}:nth(2)`);
```

But if that child element moves somewhere else in the DOM, you're in trouble. So `ember-hook` provides some tools for decoupling your hooks from the DOM structure itself. Just pass some named params into the `hook` helper:

```hbs
{{#each parentArray as |childArray containerIndex|}}
  {{#each childArray as |item index|}}
    <div data-test={{hook "item" index=index containerIndex=containerIndex}}>{{item}}</div>
  {{/each}}
{{/each}}
```

And then in your tests:

```js
$hook('item', { index: 2, containerIndex: someVariable }); // grabs a very specific 'item'
$hook('item', { containerIndex: 5 }); // grabs all 'items' contained by the 5th parent
$hook('item'); // grabs all items
```

### `initialize`

`ember-hook` works out-of-the-box with acceptance tests, but component integration tests present a problem: they do not run initializers. This includes the `ember-hook` initializer that allows you to use the `hook` attribute on a component. To fix this, you'll need to manually run the initializer in your component test:


```js
import { initialize } from 'ember-hook';

moduleForComponent('my component', 'Integration | Component | my component', {
  integration: true,

  beforeEach() {
    initialize();
  }
});
```

### Changing Component Hook

If there's a conflict with the property `hook` on your components, you can change the property name in your `config/environment` file:

```js
// config/environment.js

var ENV ={
  emberHook: {
    hookName: 'customHookName'
  }
}
```

### Changing the Delimiter

`ember-hook` delimits qualifiers by prepending the string '&^%^&' to each. If this happens to conflict with something your code, you can change it in the config as well:

```js
// config/environment.js

var ENV ={
  emberHook: {
    delimiter: '¯\_(0)_/¯'
  }
}
```

### Enabling ember-hook outside of the test environment

`ember-hook` by default is enabled when the environment is `test` or `development`.  If you need to force ember-hook to be enabled in other environments, or always on, you can use `enabled`.

```js
// config/environment.js

var ENV ={
  emberHook: {
    enabled: true
  }
}
```

```js
// config/environment.js
module.exports = function(environment) {
  var ENV ={
    emberHook: {
      // only enable in test or production builds
      enabled: environment === 'production'
    }
  }

  // ...
}
```
