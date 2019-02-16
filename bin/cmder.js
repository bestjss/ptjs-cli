#!/usr/bin/env node

const program = require('commander');
const package_config = require('../package.json');
const { logo } = require('../lib');
const question = require('../cmd');

/**
 * Commander input
 */
module.exports = new class {
  cmd() {
    let cmdValue;
    // Version
    program.version(
      package_config.version,
      '-v, --version'
    );
    // Add a new project Path to labels
    program
      .command('add')
      .description('add a new source info')
      .action((Command) => {
        cmdValue = Command._name;
        question.add();
      });
    // List Labels
    program
      .command('list')
      .description('show label list')
      .action((Command) => {
        cmdValue = Command._name;
      });
    // Pull a New Project From Label
    program
      .command('new')
      .description('create a template from label')
      .option('-i, --init', 'Remove recursively')
      .action((Command) => {
        cmdValue = Command._name;
        console.log(Command);
      });

    program.parse(process.argv);
    // no Correct cmd
    if (typeof cmdValue === 'undefined') {
      logo.show();
    }
  }
}();
