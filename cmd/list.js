#!/usr/bin/env node
const { tools } = require('../lib');
const list_config = require('./.list');
const chalk = require('chalk');
const log = console.log;

module.exports = async () => {
  const list = list_config.labes();
  log(
    chalk.yellow.underline.bold('Project Templat List :')
  );
  log();
  if (list.length > 0) {
    log(tools.tableLabes(list));
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
