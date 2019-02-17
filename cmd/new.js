#!/usr/bin/env node

const { yaml, gitlab, github, file } = require('../lib');
const chalk = require('chalk');
const log = console.log;
const new_config = require('./.new');

module.exports = async (init = false) => {
  const selectData = await new_config.base.question();
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
    out = await github.clone(
      templateInfo['remote'],
      templateInfo['branch']
    );
  }

  if (selectData.newGit === 'yes') {
    const remoteInfo = await new_config.remote.question();
    // set new git remote
    const old_project = gitlab.gitLabName(
      templateInfo['remote']
    );
    // Rename Project
    file.renameFile(old_project, remoteInfo['label']);
    // Wirte new git Config
  }

  log(chalk.blue(out));
  if (init) {
    // init project
  }
  return out;
};
