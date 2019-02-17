#!/usr/bin/env node
const { tools, file } = require('../lib');
const config = require('../config');
const list_config = require('./.list');
const del_config = require('./.delete');
const chalk = require('chalk');
const log = console.log;

module.exports = async () => {
  const list = list_config.labes();
  if (list.length > 0) {
    log(
      chalk.yellow.underline.bold(
        'Select Delete Project Templat :'
      )
    );
    const dels = await del_config.question(
      tools.yamlLabes(list)
    );
    for (const label of dels.label) {
      file.removeFile(
        `${config.YAML_PATH}/${config.PREFIX}${label}.yaml`
      );
    }
  } else {
    /*eslint-disable quotes*/
    log(chalk.red('No project template available'));
    log(
      chalk.blue(
        "You can Use Command : ' pt add ' to create project template !"
      )
    );
    /*eslint-enable quotes*/
  }
  return list;
};
