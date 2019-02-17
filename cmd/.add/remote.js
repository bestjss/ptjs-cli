#!/usr/bin/env node
const inquirer = require('inquirer');
const merge = require('deepmerge');
const config = require('../../config');
const question = async () => {
  let answers = await remote();
  switch (answers['remote-type']) {
    case 'gitlab':
      answers = merge(answers, await gitlab());
      break;
    case 'github':
      answers = merge(answers, await github());
      break;
    default:
      break;
  }
  return answers;
};

const remote = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template remote type:',
      name: 'remote-type',
      choices: [ 'GitLab', 'GitHub' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

const gitlab = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Set gitlab template remote:',
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
      message: 'Set gitlab template branch:',
      name: 'branch',
      default: 'master',
      validate: (val) => {
        if (!val) {
          return 'The branch cannot be empty';
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

const github = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Set github template remote:',
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
      message: 'Set github template branch:',
      name: 'branch',
      default: 'master',
      validate: (val) => {
        if (!val) {
          return 'The branch cannot be empty';
        }
        return true;
      }
    }
  ]);
};

module.exports = {
  question
};
