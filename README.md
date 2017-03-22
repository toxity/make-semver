# make-semver
 
[![Build Status](https://travis-ci.org/toxity/make-semver.svg?branch=master)](https://travis-ci.org/toxity/make-semver)
[![npm version](https://badge.fury.io/js/make-semver.svg)](https://www.npmjs.com/package/make-semver)

> npm tool to convert any number to [semver](http://semver.org/) format

## Install

```
$ npm install make-semver
```

## Usage

```javascript
var makeSemver = require('make-semver');
 
 // valid input
makeSemver(1)               //=> '1.0.0' 
makeSemver("1.*")           //=> '1.0.0' 
makeSemver("v1")            //=> '1.0.0' 
makeSemver(">=2.5")         //=> '2.5.0' 
makeSemver("1.2.1-beta.")   //=> '1.2.1-beta' 

 // also will work
makeSemver("4ever")         //=> '4.0.0' 

 // invalid input
makeSemver("")              //=> null
makeSemver("text")          //=> null
    
```