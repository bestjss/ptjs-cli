#!/usr/bin/env node
const Gitlib = require('./_gitlab');
const Github = require('./_github');
module.exports = {
  yaml: require('./_yaml'),
  file: require('./_file'),
  tools: require('./_tools'),
  logo: require('./_logo'),
  gitlab: new Gitlib(),
  github: new Github()
};
