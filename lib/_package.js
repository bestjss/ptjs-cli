#!/usr/bin/env node
const packageJson = require('package-json');
const compareVersions = require('compare-versions');
const packageInfo = require('../package.json');

/**
 * get Package info on npm
 */
const getNpmPackage = async () => {
  const packageName = packageInfo.name;
  return await packageJson(packageName);
};

/**
 * Check is the latest Version
 */
const chackVersion = async () => {
  // localVersion
  const localVersion = packageInfo.version;
  const npmVersion = (await getNpmPackage()).version;
  return compareVersions(localVersion, npmVersion) >= 0
    ? true
    : false;
};

module.exports = {
  getNpmPackage,
  chackVersion
};
