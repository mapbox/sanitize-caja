[![Build Status](https://secure.travis-ci.org/mapbox/sanitize-caja.png?branch=master)](http://travis-ci.org/mapbox/sanitize-caja)

# sanitize-caja

Sanitize HTML content using the [Google Caja JsHtmlSanitizer](https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer)
and a set of basic assumptions, and a wrapper to make it all work in nodejs
without global variable leaks and so on.

This is a slightly 'loosened' version of Caja's restrictions, to allow for
things like images, links, and a few HTML5 elements.

## api

### `sanitize(html: string)` -> sanitized string

Sanitize a string of HTML content, returning a sanitized string.

## install

    npm install sanitize-caja

## example

```js
var sanitize = require('sanitize-caja');

document.write(sanitize(evilUserInput));
```

## see also

* [Google Caja JsHtmlSanitizer](https://code.google.com/p/google-caja/wiki/JsHtmlSanitizer)
