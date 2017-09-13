# testcafe-browser-provider-ievms
[![Build Status](https://travis-ci.org/kartojal/testcafe-browser-provider-ievms.svg)](https://travis-ci.org/kartojal/testcafe-browser-provider-ievms)

This is the **ievms** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe). It launchs your Windows VMs previously installed with IEVMS and proceed to run tests in it. When the tests are finished, the VMs are saved and stopped. It can run multiple Internet Browsers/Edge instances at once.

## Install

```
npm install testcafe-browser-provider-ievms
```

## Requirements 

- Virtual Box
- Install virtual machines with IE/Edge via https://github.com/xdissent/ievms

## Usage


You can determine the currently installed IE/Edge vms and discover the browser aliases with:
```
testcafe -b ievms
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe 'ievms:MSEdge - Win10' 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('ievms:MSEdge - Win10')
    .run();
```

## TODO
- Stop running instances programmatically if user kills the current testcafe process (like with  "CTRL + C")
