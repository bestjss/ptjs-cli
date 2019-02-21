#!/usr/bin/env node
const config = require('../config');
const read_yaml = require('read-yaml');
const write_yaml = require('write-yaml');
const file = require('./_file');
const { encode, decode } = require('./_tools');
/**
 * Create Config file
 * @param {*} object 
 */
const writYaml = async (object) => {
  const fileName = object['label'];
  if (object['gitlab-password']) {
    object['gitlab-password'] = encode(
      object['gitlab-password'],
      object['random']
    );
  }
  return write_yaml.sync(
    `${config.YAML_PATH}/${config.PREFIX}${fileName}.yaml`,
    object
  );
};

/**
 * Read Config file
 * @param {*} fileName 
 */
const readYaml = async (fileName) => {
  const js_data = read_yaml.sync(
    `${config.YAML_PATH}/${config.PREFIX}${fileName}.yaml`
  );
  if (js_data['gitlab-password']) {
    js_data['gitlab-password'] = decode(
      js_data['gitlab-password'],
      js_data['random']
    );
  }
  return js_data;
};

/**
 * Delete Config file
 * @param {*} fileName 
 */
const removeYaml = (fileName) => {
  const path = `${config.YAML_PATH}/${config.PREFIX}${fileName}.yaml`;
  return file.removeFile(path);
};

module.exports = {
  writYaml,
  readYaml,
  removeYaml
};
