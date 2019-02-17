#!/usr/bin/env node
const { exec } = require('child_process');
const { splitRemote } = require('./_tools');

module.exports = class _GitLib {
  constructor() {}
  /**
 * Git Clone Child_process
 * @param {*} rpo 
 * @param {*} branch 
 */
  async clone(rpo, branch = '') {
    if (branch) {
      rpo = `-b ${branch} ${rpo}`;
    }
    return new Promise((resolve, reject) => {
      exec(`git clone ${rpo}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        console.log(stdout);
        resolve(stderr);
      });
    });
  }

  /**
 * Create Gitlab remote
 * @param {*} remote 
 * @param {*} account 
 * @param {*} password 
 */
  gitLabRemote(remote, account, password) {
    const res = splitRemote(remote);
    return `${res[0]}://${account}:${password}@${res[1]}`;
  }
};
