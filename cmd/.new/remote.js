#!/usr/bin/env node
const inquirer = require('inquirer');
const config = require('../../config');
const question = async () => {
  return await remote();
};

const remote = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Set a project name:',
      name: 'label',
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
      type: 'input',
      message: 'Set new gitlab project remote:',
      name: 'remote',
      default:
        'https://github.com/jsDuan/ptjs-template.git',
      validate: (val) => {
        const reg = config.REMOTE_REG;
        if (!reg.test(val)) {
          return 'The remote address format is incorrect';
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Set a gitlab account:',
      name: 'gitlab-account',
      validate: (val) => {
        if (!val) {
          return 'The gitlab account cannot be empty';
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Set a gitlab password:',
      name: 'gitlab-password',
      type: 'password',
      validate: (val) => {
        if (!val) {
          return 'The gitlab password cannot be empty';
        }
        return true;
      }
    }
  ]);
};

module.exports = {
  question
};
