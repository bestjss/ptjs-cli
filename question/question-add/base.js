#!/usr/bin/env node
const inquirer = require('inquirer');

const question = async () => {
  return await base();
};

const base = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Set a template name:',
      name: 'label',
      default: 'project_template' // 默认值
    }
  ]);
};

module.exports = {
  question
};
