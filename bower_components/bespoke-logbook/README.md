[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-logbook.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-logbook)

# [bespoke-logbook](https://github.com/joelpurra/bespoke-logbook)

Log [bespoke.js][bespoke.js] events and state to the console

The [default events][default-events] are logged by default, as are any custom events from plugins.



## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-logbook/master/dist/bespoke-logbook.min.js
[max]: https://raw.github.com/joelpurra/bespoke-logbook/master/dist/bespoke-logbook.js



## Usage

First, include `bespoke.js`, `bespoke-convenient.js` and `bespoke-logbook.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  convenient: true,
  logbook: true
});
```

### Overriding event logging

You can override logging per `eventName`, either at instantiation or dynamically. You can pass `false` to turn off the specific logger, a plain string, or a function.


#### Custom events

The function will be called once before firing the event, and once after, with the result - 

```js
// Before the event handlers have been called
myCustomEventLoggingOverride("fire", eventName[, eventData, ...])

// After all event handlers have been called
myCustomEventLoggingOverride("fired", result, eventName[, eventData, ...])
```

#### Default events

The [default events][default-events] are fired a bit differently than custom events - they aren't intercepted, but rather listened to.

```js
// An event parameter is passed
myDefaultEventLoggingOverride(e)
```

#### Override at instantiation

```js
bespoke.horizontal.from("article", {
    logbook: {
        overrides: {
            // An example of a default event
            "activate": function(e) {
                console.log("activate", "Slide #" + e.index + " was activated!", e.slide);
            },
            // An example of a custom event
            "custom1": function() {
                console.log("Custom logging is so much fun", arguments)
            },
            // An example of a custom event logged with a static string
            "custom2": "Will only log this string"
        }
    }
});
```

#### Override dynamically

```js
bespoke.plugins.logbook.override("deactivate", function(e) {
    console.log("deactivate", "Slide #" + e.index + " was deactivated!", e.slide);
});
```

### Enable/disable logbook

```js
// logbook is making a lot of noise in the console
bespoke.plugins.logbook.disable();

// logbook is good as dead

bespoke.plugins.logbook.enable();
// logbook is back once again, with the ill behaviour
```


## Package managers

### Bower

```bash
$ bower install bespoke-logbook
```

### npm

```bash
$ npm install bespoke-logbook
```

The bespoke-logbook npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-convenient');
require('bespoke-logbook');
```



## TODO

- Accept separate before/after custom event overrides.
- Normalize default and custom event overrides.
- Mimic the default event handlers' `event` object?
- Allow option to not autostart/enable logbook at instantiation.


## Credits

[Mark Dalgleish](http://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Adam Edmond, [addyeddy on flickr](https://secure.flickr.com/photos/addyeddy/), for his photo [Old log book](https://secure.flickr.com/photos/addyeddy/3430320766/) ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, [Joel Purra](http://joelpurra.com/) All rights reserved.

When using bespoke-logbook, comply to the [MIT license](http://joelpurra.mit-license.org/2013). Please see the LICENSE file for details, and the [MIT License on Wikipedia](http://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js
[default-events]: https://github.com/markdalgleish/bespoke.js#events
