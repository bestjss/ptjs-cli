#!/usr/bin/env node
const inquirer = require('inquirer');
const file = require('../../lib').file;

const question = async () => {
  return await base();
};

const base = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Set a template name:',
      name: 'label',
      default: 'project_template',
      validate: (val) => {
        const res = file.checkLabel(val);
        if (res) {
          return 'The template name has been exists';
        }
        if (val.indexOf('.') > -1) {
          return 'Do not include special symbols, such as [ . / ]';
        }
        return true;
      }
    }
  ]);
};

module.exports = {
  question
};
