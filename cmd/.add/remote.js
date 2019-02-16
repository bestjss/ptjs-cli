#!/usr/bin/env node
const inquirer = require('inquirer');
const merge = require('deepmerge');
const question = async () => {
  let answers = await remote();
  switch (answers['remote-type']) {
    case 'gitlab':
      answers = merge(answers, await gitlab());
      break;
    case 'github':
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
      name: 'gitlab-remote',
      default:
        'https://gitlab.bestjss.com/tools-cli/ptjs-cli.git',
      validate: (val) => {
        /*eslint-disable no-useless-escape*/
        const reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#].git)/;
        /*eslint-enable no-useless-escape*/
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
