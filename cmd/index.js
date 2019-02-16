#!/usr/bin/env node
const merge = require('deepmerge');
const { yaml, logo, tools } = require('../lib');
const superb = require('superb');
const add_config = require('./.add');
const list_config = require('./.list');
const chalk = require('chalk');
const log = console.log;
// const new_config = require('./.new');

module.exports = {
  // new cmd questions
  new: async () => {
    return '';
  },
  // add cmd questions
  add: async () => {
    const random = { random: superb.random() };
    const base = await add_config.base.question();
    const language = await add_config.language.question();
    const remote = await add_config.remote.question();
    const answers = merge.all([
      random,
      base,
      language,
      remote
    ]);
    // When finish ask , write config file
    await yaml.writYaml(answers);
    logo.show();
    log(chalk.yellow.underline.bold('Project Templat Add Result :'));
    log();
    log(chalk.green('Project Template Add Finished !'));
    log(
      chalk.blue(
        `You can Use Command : ' pt new ${answers[
          'label'
        ]} ' to create project template !`
      )
    );
    return answers;
  },
  // list cmd questions
  list: async () => {
    const list = list_config.labes();
    logo.show();
    log(
      chalk.yellow.underline.bold('Project Templat List :')
    );
    log();
    if (list.length > 0) {
      log(tools.tableLabes(list));
    } else {
      /*eslint-disable quotes*/
      log(
        chalk.red(
          'No project template available'
        )
      );
      log(
        chalk.blue(
          "You can Use Command : ' pt add ' to create project template !"
        )
      );
      /*eslint-enable quotes*/
    }
    return list;
  }
};
