#!/usr/bin/env node
const inquirer = require('inquirer');
const { file, tools } = require('../../lib');
const question = async (list) => {
  return await base(list);
};

const base = async (list) => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template:',
      name: 'label',
      choices: tools.yamlLabes(list)
    },
    {
      type: 'input',
      message: 'Set a project name:',
      name: 'pt_new_name',
      default: 'new_project',
      validate: (val) => {
        if (!val) {
          return 'The project name cannot be empty';
        }
        if (val.indexOf('.') > -1) {
          return 'Do not include special symbols, such as [ . / ]';
        }
        return true;
      }
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
