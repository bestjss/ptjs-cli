#!/usr/bin/env node

const program = require('commander');
const package_config = require('../package.json');
const { logo } = require('./logo');
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
      .option('-l, --label [value]', 'project label')
      .option('-t, --type [value]', 'gitlib/github')
      .option('-a, --account [value]', 'account')
      .option('-p, --password [value]', 'password')
      .action((Command) => {
        cmdValue = Command._name;
        console.log('label:', Command.label);
        console.log('type:', Command.type);
        console.log('account:', Command.account);
        console.log('password:', Command.password);
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
      logo();
    }
  }
}();
