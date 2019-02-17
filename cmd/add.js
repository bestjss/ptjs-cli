#!/usr/bin/env node
const merge = require('deepmerge');
const { yaml,tools } = require('../lib');
const add_config = require('./.add');
const chalk = require('chalk');
const log = console.log;
module.exports = async () => {
  log(
    chalk.yellow.underline.bold(
      'The Git must be installed berfor:'
    )
  );
  const random = { random: tools.random(16) };
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

  log(
    chalk.yellow.underline.bold(
      'Project Templat Add Result :'
    )
  );
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
};
