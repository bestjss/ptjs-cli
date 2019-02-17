#!/usr/bin/env node

const crypto = require('crypto');
const cryptoRandomString = require('crypto-random-string');
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
const random = (length = 16) => {
  return cryptoRandomString(length);
};

/**
 * Encode
 * @param {*} data 
 * @param {*} password 
 */
const encode = (data, password) => {
  const cipher = crypto.createCipheriv(
    'aes-128-cbc',
    password,
    '1988081319880813'
  );
  let crypted = cipher.update(data, 'utf-8', 'binary');
  crypted += cipher.final('binary');
  crypted = new Buffer(crypted, 'binary').toString(
    'base64'
  );
  return crypted;
};

/**
 * Decode
 * @param {*} data 
 * @param {*} password 
 */
const decode = (data, password) => {
  data = new Buffer(data, 'base64').toString('binary');
  const decipher = crypto.createDecipheriv(
    'aes-128-cbc',
    password,
    '1988081319880813'
  );
  let decrypted = decipher.update(data, 'binary', 'utf-8');
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
