#!/usr/bin/env node
const path = require('path');

module.exports = {
  YAML_PATH: path.join(__dirname, '../.yamls'),
  PREFIX: '.',
  /*eslint-disable no-useless-escape*/
  REMOTE_REG: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#].git)/
  /*eslint-enable no-useless-escape*/
};
