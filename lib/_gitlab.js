#!/usr/bin/env node
// const { exec } = require('child_process');
const { splitRemote } = require('./_tools');
const _Git = require('./_git');
module.exports = class _GitLib extends _Git {
  constructor(url, account, password, branch = 'master') {
    const res = splitRemote(url);
    const remote = `${res[0]}://${account}:${password}@${res[1]}`;
    super(url, remote, branch);
  }
};
