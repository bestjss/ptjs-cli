#!/usr/bin/env node
const inquirer = require('inquirer');
const merge = require('deepmerge');

const question = async () => {
  let answers = await language();
  switch (answers['source-type']) {
    case 'python':
      answers = merge(answers, await python());
      break;
    case 'nodejs':
      answers = merge(answers, await nodejs());
      break;
    case 'angularjs':
      answers = merge(answers, await angularjs());
      break;
    case 'vuejs':
      answers = merge(answers, await vuejs());
      break;
    default:
      break;
  }
  return answers;
};

const language = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template source type:',
      name: 'source-type',
      choices: [ 'Python', 'Nodejs', 'Angularjs', 'Vuejs' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

const python = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template package type:',
      name: 'package-type',
      choices: [ 'pip' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

const nodejs = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template package type:',
      name: 'package-type',
      choices: [ 'npm', 'yarn' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

const angularjs = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template package type:',
      name: 'package-type',
      choices: [ 'npm', 'yarn' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

const vuejs = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Select template package type:',
      name: 'package-type',
      choices: [ 'npm', 'yarn' ],
      filter: (val) => {
        return val.toLowerCase();
      }
    }
  ]);
};

module.exports = {
  question
};
