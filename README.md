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

Then in your tests:

```js
import { hook, $hook } from 'ember-hook';

. . . .

test('my hooks work', function(assert) {
  assert.equal($hook('foo'), 'bar'); // works
  assert.equal($(hook('foo')), 'bar'); // also works
});
```

`hook` returns a string such as `[data-test="foo"]`, while `$hook` returns an actual jquery object.

Note that if you want to use `hook` or `$hook`, you need to name your data attribute `data-test`.
