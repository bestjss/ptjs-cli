#!/usr/bin/env node
const chalk = require('chalk');
const { pack } = require('../lib');
const compareVersions = require('compare-versions');
const packageInfo = require('../package.json');
const fse = require('fs-extra');
const config = require('../config');

/**
 * Check File
 */
const configDirCheck = async () => {
  return await fse.ensureDir(config.YAML_PATH);
};

/**
 * random check
 */
const versionCheck = async () => {
  if (parseInt(Math.random() * 10, 10) >= 5) {
    const r = await pack.getNpmPackage();
    const cpv =
      compareVersions(packageInfo.version, r.version) >= 0
        ? true
        : false;
    if (!cpv) {
      console.log();
      console.log(
        chalk.blue(
          'ptjs-cli has released a new version',
          r.version
        )
      );
      console.log(
        chalk.green('Please run'),
        chalk.yellow('npm update ptjs-cli -g'),
        chalk.green(
          'to update',
          packageInfo.version,
          '=>',
          r.version
        )
      );
    }
  }
};

module.exports = {
  versionCheck,
  configDirCheck
};
