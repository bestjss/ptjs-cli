#!/usr/bin/env node

const { yaml, Gitlab, Github, file } = require('../lib');
const chalk = require('chalk');
const log = console.log;
const new_config = require('./.new');

module.exports = async (init = false) => {
  const list = file.yamlList();
  if (!list.length) {
    /*eslint-disable quotes*/
    log(chalk.red('No project template available'));
    log(
      chalk.blue(
        "You can Use Command : ' pt add ' to create project template !"
      )
    );
    /*eslint-enable quotes*/
    return;
  }
  const selectData = await new_config.base.question(list);
  const label = selectData.label;
  log(
    chalk.yellow.underline.bold(
      `Begin to create new Project from template : ${label}`
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
    const gitlab = new Gitlab(
      templateInfo['remote'],
      templateInfo['gitlab-account'],
      templateInfo['gitlab-password'],
      templateInfo['branch']
    );
    out = await gitlab.clone();
  }
  if (templateInfo['remote-type'] === 'github') {
    const github = new Github(
      templateInfo['remote'],
      templateInfo['branch']
    );
    out = await github.clone();
  }

  // Use a new git remote
  if (selectData.newGit === 'yes') {
    const remoteInfo = await new_config.remote.question();
    const gitlab = new Gitlab(
      remoteInfo['remote'],
      remoteInfo['gitlab-account'],
      remoteInfo['gitlab-password']
    );
    // set new git remote
    const old_project = file.labelName(
      templateInfo['remote']
    );
    // Rename Project
    file.renameFile(old_project, remoteInfo['label']);
    // Remove old git
    gitlab.remove(
      `${process.cwd()}/${remoteInfo['label']}/.git`
    );
    // Wirte new git Config
    await gitlab.init(
      `${process.cwd()}/${remoteInfo['label']}`
    );

    // Add and commit && push
  }

  log(chalk.blue(out));
  if (init) {
    // init project
  }
  return out;
};
