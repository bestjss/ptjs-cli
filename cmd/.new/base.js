#!/usr/bin/env node
const inquirer = require('inquirer');
const { file, tools } = require('../../lib');
const question = async () => {
  return await base();
};

const base = async () => {
  const list = file.yamlList();
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template:',
      name: 'label',
      choices: tools.yamlLabes(list)
    },
    {
      type: 'list',
      message: 'Use new gitlib?:',
      name: 'newGit',
      choices: [ 'yes', 'no' ]
    }
  ]);
};

module.exports = {
  question
};
