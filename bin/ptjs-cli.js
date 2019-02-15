#!/usr/bin/env node
// const { Logo, Cmd } = require('../lib');
const { cmd } = require('./cmder');
const { logo } = require('./logo');
const start = () => {
  logo();
  cmd();
};

start();
