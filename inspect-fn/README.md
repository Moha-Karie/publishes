# inspect-fn

[![npm version](https://img.shields.io/npm/v/inspect-fn.svg)](https://www.npmjs.com/package/inspect-fn)
[![npm downloads](https://img.shields.io/npm/dt/inspect-fn.svg)](https://www.npmjs.com/package/inspect-fn)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple **function inspector utility** for Node.js and the browser.  
It prints detailed information about a function including name, arguments, prototype, type, symbols, and more.

---

## Installation

### Node.js

```bash
npm install inspect-fn
````

### Browser

Include `index.js` in your HTML file:

```html
<script src="index.js"></script>
```

---

## Usage

### Node.js

```js
const inspect = require("inspect-fn");

function add(a, b) {
  return a + b;
}

inspect(add);
```

### Browser

```html
<script src="index.js"></script>
<script>
  function multiply(x, y) {
    return x * y;
  }

  inspect(multiply);
</script>
```

---

## Features

* Prints full function code
* Shows function name, expected arguments, type, and prototype
* Lists own properties, enumerable keys, and symbols
* Detects if the function is native code
* Works in both Node.js and browser environments

---

## Quick Demo Screenshot

Example of inspecting a function in Node.js:

```bash
==================================================
í´ Inspecting function: add
--------------------------------------------------
Full code:
function add(a, b) {
  return a + b;
}
Name: add
Expected args (length): 2
Own properties: [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
Prototype: { constructor: [Function: add] }
Type: function
Is callable? true
Constructor: [Function: Function]
Symbols: []
Symbol.toStringTag: undefined
Enumerable keys: []
Prototype chain: {} -> {}
Is native code? false
==================================================
```

---

## License

MIT License
