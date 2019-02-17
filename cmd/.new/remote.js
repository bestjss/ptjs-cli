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
    }
  ]);
};

module.exports = {
  question
};
