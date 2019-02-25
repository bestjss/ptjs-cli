#!/usr/bin/env node

const program = require('commander');
const package_config = require('../package.json');
const { logo } = require('../lib');
const {
  add,
  list,
  create,
  del,
  version_config
} = require('../cmd');
const chalk = require('chalk');
/**
 * Commander input
 */
module.exports = new class {
  cmd() {
    // Check Update
    let cmdValue;

    program.version(
      package_config.version,
      '-v, --version'
    );
    // Add a new project Path to labels
    program
      .command('add')
      .description('add a new tepmlate info')
      .action((Command) => {
        cmdValue = Command._name;
        add()
          .then(() => {
            console.log(chalk.green('Finished!'));
            logo.show();
          })
          .catch((err) => {
            console.log(chalk.red('something error:', err));
          });
      });
    // List Labels
    program
      .command('list')
      .description('show tepmlate-name list')
      .action((Command) => {
        cmdValue = Command._name;
        list()
          .then(() => {
            console.log(chalk.green('Finished!'));
            logo.show();
          })
          .catch((err) => {
            console.log(chalk.red('Something Error:', err));
          });
      });
    // Pull a New Project From Label
    program
      .command('new')
      .description('create a project from template-name')
      .option(
        '-i, --init',
        'init project ; such as run [ npm -i / pip install -r requirements.txt ] '
      )
      .action((Command) => {
        cmdValue = Command._name;
        create(Command.init)
          .then(() => {
            console.log(chalk.green('Finished!'));
            logo.show();
          })
          .catch((err) => {
            console.log(chalk.red('something error:', err));
          });
        // console.log(name, cmdValue, Command.init);
      });
    // Delete Project Template
    program
      .command('delete')
      .description('delete a project template')
      .action((Command) => {
        cmdValue = Command._name;
        del()
          .then(() => {
            console.log(chalk.green('Finished!'));
            logo.show();
          })
          .catch((err) => {
            console.log(chalk.red('something error:', err));
          });
        // console.log(name, cmdValue, Command.init);
      });
    program.parse(process.argv);
    // Version
    version_config.versionCheck();
    // no Correct cmd
    if (typeof cmdValue === 'undefined') {
      logo.show();
    }
  }
}();
