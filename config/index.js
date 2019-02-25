#!/usr/bin/env node
const path = require('path');
const os = require('os')
module.exports = {
  // YAML_PATH: path.join(__dirname, '../.yamls'),
  YAML_PATH: path.join(os.homedir(), '.ptjs'),
  PREFIX: '.',
  /*eslint-disable no-useless-escapec */
  REMOTE_REG: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#].git)/,
  LABEL_REG: /(?<=\/)[^\/.\.]*(?=\.git)/
  /*eslint-enable no-useless-escape */
};
