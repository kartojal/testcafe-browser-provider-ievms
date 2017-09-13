# testcafe-browser-provider-ievms
[![Build Status](https://travis-ci.org/kartojal/testcafe-browser-provider-ievms.svg)](https://travis-ci.org/kartojal/testcafe-browser-provider-ievms)

This is the **ievms** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-ievms
```

## Usage


You can determine the available browser aliases by running
```
testcafe -b ievms
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe ievms:browser1 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('ievms:browser1')
    .run();
```

## Author
Kartojal 
