#!/usr/bin/env node

const { yaml, gitlab, file } = require('../lib');
const chalk = require('chalk');
const log = console.log;
const new_config = require('./.new');

module.exports = async (init = false) => {
  const selectData = await new_config.base.question();
  if (selectData.newGit === 'yes') {
    const remote = await new_config.remote.question();
    console.log(remote);
    // set new git remote
  }

  const label = selectData.label;
  log(
    chalk.yellow.underline.bold(
      `Begin to create new template : ${label}`
    )
  );
  // Check Template ex
  const checkFile = file.checkLabel(label);
  if (!checkFile) {
    log(chalk.red('The Project Template does not exist !'));
    return;
  }
  // Get Template info
  const templateInfo = await yaml.readYaml(label);
  // Check git && get Git info
  // Clone git
  let out;
  if (templateInfo['remote-type'] === 'gitlab') {
    out = await gitlab.clone(
      templateInfo['remote'],
      templateInfo['branch']
    );
  }
  if (templateInfo['remote-type'] === 'github') {
    out = await gitlab.clone(
      templateInfo['remote'],
      templateInfo['branch']
    );
  }
  log(chalk.blue(out));
  if (init) {
    // init project
  }
  return out;
};
