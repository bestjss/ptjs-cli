#!/usr/bin/env node
const merge = require('deepmerge');
const { yaml, logo } = require('../lib');
const superb = require('superb');
const add_config = require('./.add');
const chalk = require('chalk');
const log = console.log;
// const new_config = require('./.new');
// const list_config = require('./.list');

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
    log(chalk.green('================='));
    log(chalk.blue('Project Template Add Finished !'));
    log(
      chalk.blue(
        `You can Use Command : ' pt new ${answers[
          'label'
        ]} ' to create project template !`
      )
    );
    log(chalk.green('================='));
    return answers;
  },
  // list cmd questions
  list: async () => {}
};
