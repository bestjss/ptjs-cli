#!/usr/bin/env node

const program = require('commander');
const package_config = require('../package.json');
/**
 * Commander input
 */
module.exports = new class {
  cmd() {
    // Version
    program.version(package_config.version, '-v, --version');
    // Add
    program
      .command('add')
      .description('add a new source info')
      .option('-l, --label [value]', 'project label')
      .option('-t, --type [value]', 'gitlib/github')
      .option('-n, --name [value]', 'account')
      .option('-p, --password [value]', 'password')
      .action((Command) => {
        console.log('label:', Command.label);
        console.log('type:', Command.type);
        console.log('name:', Command.name);
        console.log('password:', Command.password);
      });
    program
      .command('new')
      .description('create a template from label')
      .option('-i, --init', 'Remove recursively')
      .action((dir, cmd) => {
        console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''));
      });
    program.parse(process.argv);
  }
}();
