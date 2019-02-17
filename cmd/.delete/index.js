#!/usr/bin/env node
const inquirer = require('inquirer');
const file = require('../../lib').file;

const question = async (list) => {
  return await base(list);
};

const base = async (list) => {
  return inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Set a template name:',
      name: 'label',
      choices: list,
      validate: () => {
        return true;
      }
    }
  ]);
};

module.exports = {
  question
};
