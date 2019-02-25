#!/usr/bin/env node

const add_config = require('./add');
const list_config = require('./list');
const new_config = require('./new');
const del_config = require('./delete');
const version_config = require('./version');
module.exports = {
  // new cmd questions
  create: new_config,
  // add cmd questions
  add: add_config,
  // list cmd questions
  list: list_config,
  // delete cmd querstions
  del: del_config,
  // Version
  version_config: version_config
};

