#!/usr/bin/env node
const inquirer = require('inquirer');
const file = require('../../lib').file;
const question = async () => {
  return await base();
};

const base = async () => {
  const list = file.yamlList()
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template:',
      name: 'label',
      choices: list
    }
  ]);
};

module.exports = {
  question
};
