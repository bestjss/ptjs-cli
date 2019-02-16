#!/usr/bin/env node

const crypto = require('crypto');
const superb = require('superb');

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
  random
};
