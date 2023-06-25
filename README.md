# Simpledice
[Package available on NPM](https://www.npmjs.com/package/simpledice)

A simple module to simulate customizable dice rolls and coin flips.  This module will roll any combination of dice with 4, 6, 8, 10, 12, 20 or 100 sides. 

## Installation instructions
Install this module into your project with the following command: 
```
npm install simpledice
```

Import it into your JS/Node project like so:
```
const roller = require('simpledice');
```

Roll on (and don't forget about the cat!)

## Methods && Usage
- `.coinFlip()` 
  - Takes no arguments and will randomly return 'heads' or 'tails' as a string.
- `.rollOne()` 
  - Takes one argument (sides) which must be an integer.  
  - If that integer is not in the list of available dice (4, 6, 8, 10, 12, 20 or 100) then it will return a string error message, otherwise it will return a randomly rolled die of the given number of sides as an integer.
- `.rollMany()` 
  - Takes one argument (dice), which must be a single die group as a string or many die groups as an array of strings.  
  - Strings must be of format `"<NUMBER>d<SIDES>"`, e.g. `"2d6"` or `"3d20"` for a group of one die type, or `["2d6", "1d20"]` for a group of many dice types, where `<NUMBER>` is the number of dice in a group of dice with `<SIDES>` number of sides.
  - Returns a string error message if the provided arguments to not conform to
- `.cat()` - Takes no arguments, and you get to pet the cat! 

[![Package Version](https://img.shields.io/npm/v/simpledice)](https://www.npmjs.com/package/simpledice)
[![Total Downloads](https://img.shields.io/npm/dt/simpledice)](https://www.npmjs.com/package/simpledice)
