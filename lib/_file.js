#!/usr/bin/env node
const fs = require('fs');
const fse = require('fs-extra');
const config = require('../config');

/**
 * Check label isExists
 * @param {*} label 
 */
const checkLabel = (label) => {
  return fse.pathExistsSync(
    `${config.YAML_PATH}/_${label}.yaml`
  );
};

/**
 * get label Config list
 */
const yamlList = () => {
  return fs.readdirSync(config.YAML_PATH);
};

/**
 * Read Label
 * @param {*} label 
 */
const readLabel = (label) => {
  return fs.readFileSync(
    `${config.YAML_PATH}/_${label}.yaml`
  );
};

module.exports = {
  checkLabel,
  readLabel,
  yamlList
};
