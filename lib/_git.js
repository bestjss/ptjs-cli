#!/usr/bin/env node
const gitP = require('simple-git/promise');
const { removeFile } = require('./_file');

module.exports = class _Git {
  /**
   * 
   * @param {*} url http:// *.git 
   * @param {*} remote http://user:pwd@*.git 
   * @param {*} branch master
   * @
   */
  constructor(url, remote, branch = 'master') {
    this.url = url;
    this.remote = remote;
    this.branch = branch;
  }
  /**
   * clone
   * @param {*} remote with username && password
   */
  async clone() {
    return await gitP().silent(true).clone(this.remote);
  }

  /**
   * pull
   * @param {*} remote 
   * @param {*} branch 
   */
  async pull() {
    return await gitP().pull(this.remote, this.branch);
  }

  /**
   * initialiseRepo
   * @param {*} remote only the url 
   */
  async init(dir) {
    const git = gitP(dir);
    await git.init();
    return await git.addRemote('origin', this.url);
  }

  /**
   * Delete .git
   * @param {*} projectName 
   */
  remove(dir) {
    return removeFile(dir);
  }
};
