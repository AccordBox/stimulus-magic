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

In the Stimulus Controller

1. To check if the `errorMessage` target exists, I should use `this.hasErrorMessageTarget` (capitalize the first letter)
2. And if I want to get the `errorMessage` target, I should use `this.errorMessageTarget`. (add suffix `Target`)

```html

### Pain 2

If I want to set controller target in the HTML, I should think about the naming convention of Stimulus and manually add `data-` prefix to the target name.

## Better Solution

This package can help you solve the above problems

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

From my perspective, the API is much cleaner, and I do not need to change the naming convention of the target, value and class in my Javascript.

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

So you can easily copy the kebab-case format of the target, value, css class to the HTML.

It will also print `valueChanged` method name if you want to monitor the value change in Stimulus controller.

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

I prefer to turn it on during development.

## Install

```bash
$ npm install stimulus-magic
```

## Usage

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
