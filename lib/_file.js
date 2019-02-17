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
    `${config.YAML_PATH}/${config.PREFIX}${label}.yaml`
  );
};

/**
 * get label Config list
 */
const yamlList = () => {
  const result = [];
  const list = fs.readdirSync(config.YAML_PATH);
  for (const file of list) {
    if (
      file.startsWith(config.PREFIX) &&
      file.endsWith('.yaml')
    ) {
      result.push(file);
    }
  }
  return result;
};

/**
 * Read Label
 * @param {*} label 
 */
const readLabel = (label) => {
  return fs.readFileSync(
    `${config.YAML_PATH}/${config.PREFIX}${label}.yaml`
  );
};

/**
 * Rename File
 * @param {*} oldName 
 * @param {*} newName 
 */
const renameFile = (oldName, newName) => {
  return fs.renameSync(
    `${process.cwd()}/${oldName}`,
    `${process.cwd()}/${newName}`
  );
};

/**
 * Remove .git Files
 * @param {*} projectName 
 */
const removeFiles = (path) => {
  // return fs.rmdirSync(path);
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      var curPath = `${path}/${file}`;
      if (fs.statSync(curPath).isDirectory()) {
        removeFiles(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

/**
 * Delete file
 * @param {*} path 
 */
const removeFile = (path) => {
  return fs.unlinkSync(path);
};

/**
   * 
   * @param {*} remote 
   */
const labelName = (remote) => {
  const name = remote.match(config.LABEL_REG);
  return name[0];
};

module.exports = {
  checkLabel,
  readLabel,
  yamlList,
  renameFile,
  removeFile,
  removeFiles,
  labelName
};
