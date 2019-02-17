#!/usr/bin/env node

const crypto = require('crypto');
const superb = require('superb');
const split = require('split-string');
const config = require('../config');
const { table } = require('table');

/**
 * Create Table out
 * @param {*} list 
 */
const tableLabes = (list) => {
  let data = [];
  let i = 0;
  for (const yamls of list) {
    i++;
    const fileName = splitYaml(yamls);
    data.push([ i, fileName ]);
  }
  return table(data);
};

/**
 * Create Label out
 * @param {*} list 
 */
const yamlLabes = (list) => {
  let data = [];
  for (const yamls of list) {
    const fileName = splitYaml(yamls);
    data.push(fileName);
  }
  return data;
};

/**
 * Split Template name
 * @param {*} yaml 
 */
const splitYaml = (yaml) => {
  const res = split(yaml, { separator: config.PREFIX });
  return res[1].replace('.yaml', '');
};

/**
 * Split url
 * @param {*} url 
 */
const splitRemote = (url) => {
  return url.split('://');
};

/**
 * random str
 */
const random = () => {
  return superb.random();
};

/**
 * Encode
 * @param {*} data 
 * @param {*} password 
 */
const encode = (data, password) => {
  const cipher = crypto.createCipher('aes192', password);
  let crypted = cipher.update(data, 'utf-8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

/**
 * Decode
 * @param {*} data 
 * @param {*} password 
 */
const decode = (data, password) => {
  const decipher = crypto.createDecipher(
    'aes192',
    password
  );
  let decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

module.exports = {
  encode,
  decode,
  random,
  splitYaml,
  splitRemote,
  tableLabes,
  yamlLabes
};
