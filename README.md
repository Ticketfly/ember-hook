[![npm version](https://badge.fury.io/js/ember-hook.svg)](https://badge.fury.io/js/ember-hook)
[![Build Status](https://travis-ci.org/Ticketfly/ember-hook.svg?branch=master)](https://travis-ci.org/Ticketfly/ember-hook)
[![Code Climate](https://codeclimate.com/github/Ticketfly/ember-hook/badges/gpa.svg)](https://codeclimate.com/github/Ticketfly/ember-hook)
[![Test Coverage](https://codeclimate.com/github/Ticketfly/ember-hook/badges/coverage.svg)](https://codeclimate.com/github/Ticketfly/ember-hook/coverage)

# ember-hook

Way to go! You just completed a full and rigorous suite of acceptance tests for your Ember app! But wait, what is this? Your designers have overhauled the site, and now you need to update all your tests to reflect new class names? Well, #@!%!!!

Enter `ember-hook`. Rather than coupling your tests to fickle class names, it lets you use stable data attributes. Better yet, these attributes only appear when you're running your tests, keeping your source code trim and simple in production.

## Installation

`ember install ember-hook`

## Usage

Use the `hook` helper to define your data attribute:

```hbs
<div class='arnt-i-pretty' data-test={{hook 'foo'}}>bar</div>
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
  assert.equal($hook('foo'), 'bar'); // works
  assert.equal(find(hook('foo')), 'bar'); // also works
});
```

`hook` returns a string such as `[data-test="foo"]`, while `$hook` returns an actual jquery object.

Note that if you want to use `hook` or `$hook`, you need to name your data attribute `data-test`.

### Unit Tests

If you're unit testing your components, `ember-hook` won't be able to access your app's `config/environment` and determine whether or not you're running a test. In this case, you can force hook to activate:

```js
const component = this.subject({ forceHook: true });
```

Note that this will eventually be depricated as the Ember community transitions to using integration tests for their components.
