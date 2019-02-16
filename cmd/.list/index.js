#!/usr/bin/env node
const { file } = require('../../lib');
module.exports = {
  labes: () => {
    return file.yamlList()
  }
};
