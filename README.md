# README

## The Pain of the Stimulus Naming Conventions

### Pain 1

```js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "query", "errorMessage", "results" ]
  // …
}
```

In the Stimulus Controller (Javascript), we use `camelCase` format.

1. To check if the `errorMessage` target exists, we should use `this.hasErrorMessageTarget` (capitalize the first letter of `errorMessage`)
2. And if we want to get the `errorMessage` target, we should use `this.errorMessageTarget`. (add suffix `Target`)

### Pain 2

To set controller target in the HTML, we should generate the `kebab-case` format from the `target`

**It feels not good to switch between different naming convention, that is why I wrote this package to get my life easier**

## Better Solution

Assume we have controller:

```js
import { Controller } from "@hotwired/stimulus"
import { useMagic } from "./stimulus-magic";

export default class extends Controller {
  static targets = [ "modalContent"]
  static values = [ "url"]

  connect() {
    useMagic(this, {verbose: true});
  }
}
```

The setup is very simple. Just import `useMagic` and call it in the `connect` method. 

Then a `magic` object is added to the Stimulus controller, you can use it to manipulate the target, value and css class.

```js
// target singular 
console.log(this.magic.target.modalContent);

// target plural
console.log(this.magic.targets.modalContent);

// target existential
console.log(this.magic.hasTarget.modalContent);

// value existential
console.log(this.magic.hasValue.url);

// value getter
console.log(this.magic.value.url);

// value setter
this.magic.value.url = 'https://stimulus.hotwired.dev/';
```

### Custom Property Name

You can even `useMagic(this, {prop: 'x'});` to change the property name of the magic object.

Then access it via `x` property

```js
console.log(this.x.target.modalContent);
```

### Helper Log

This package also print helper logs on the console of the browser.

You can turn it on by `useMagic(this, {verbose: true})`

It will iterate all the targets, values, css classes, and print the **kebab-case** format of the target, value, css class.

So we can copy the kebab-case format of the target, value, css class to the HTML directly.

It will also print `valueChanged` method name if we want to monitor the value change in Stimulus controller.

```
modal target: data-modal-container
modal target: data-modal-modal-content
modal value: data-modal-backdrop-color
modal value changed: backdropColorValueChanged
modal value: data-modal-restore-scroll
modal value changed: restoreScrollValueChanged
modal value: data-modal-url
modal value changed: urlValueChanged
```

I prefer to turn it on during development and copy if I need, which is very straightforward.

## Install

```bash
$ npm install stimulus-magic
```

## Usage 1: Composing

This package is composable, which means you can use it with any Stimulus controller without causing any side effects.

```js
import { Controller } from "@hotwired/stimulus"
import { useMagic } from "./stimulus-magic";

export default class extends Controller {
  connect() {
    useMagic(this);
  }
}
```

```js
// defaupt setup, use magic as the property name
useMagic(this);

// custome magic
useMagic(this, {prop: 'x'});

// print helper log on the console of the browser
useMagic(this, {verbose: true});
```

## Usage 2: Extend Class

Or you can extend the base class

```js
import { Controller } from "@hotwired/stimulus"
import { MagicController } from "./stimulus-magic";

export default class extends MagicController {
  
  static magicOptions = {verbose: false};
  
}
```
