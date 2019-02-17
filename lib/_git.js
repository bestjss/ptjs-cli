#!/usr/bin/env node
const gitP = require('simple-git/promise');
const { removeFiles } = require('./_file');

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
    await git.add('./*');
    await git.commit('Pt-js cli commit!');
    await git.addRemote('origin', this.url);
    await git.push('origin', 'master');
    return;
  }

  /**
   * Delete .git
   * @param {*} projectName 
   */
  remove(dir) {
    return removeFiles(dir);
  }
};
