#!/usr/bin/env node
const { exec } = require('child_process');

/**
 * Git Clone 
 * @param {*} rpo 
 * @param {*} branch 
 */
const clone = async (rpo, branch = '') => {
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
};

module.exports = { clone };
