#!/usr/bin/env node
const config = require('../config');
const read_yaml = require('read-yaml');
const write_yaml = require('write-yaml');
const { encode, decode } = require('./_tools');
/**
 * 创建Config file
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
    `${config.YAML_PATH}/_${fileName}.yaml`,
    object
  );
};

const readYaml = async (fileName) => {
  const js_data = read_yaml.sync(
    `${config.YAML_PATH}/_${fileName}.yaml`
  );
  if (js_data['gitlab-password']) {
    js_data['gitlab-password'] = decode(
      js_data['gitlab-password'],
      js_data['random']
    );
  }
  return js_data;
};

module.exports = {
  writYaml,
  readYaml
};

readYaml('project_template').then((r) => {
  console.log(r);
});
