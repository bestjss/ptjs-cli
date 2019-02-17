#!/usr/bin/env node
const _Git = require('./_git');

module.exports = class _GitHub extends _Git {
  constructor(url, branch = 'master') {
    super(url, url, branch);
  }
};
