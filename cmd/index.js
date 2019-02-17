#!/usr/bin/env node

const add_config = require('./add');
const list_config = require('./list');
const new_config = require('./new');

module.exports = {
  // new cmd questions
  create: new_config,
  // add cmd questions
  add: add_config,
  // list cmd questions
  list: list_config
};
