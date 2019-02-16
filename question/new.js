#!/usr/bin/env node
const inquirer = require('inquirer');

const howOld = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: '设置一个用户名:',
        name: 'name',
        default: 'test_user' // 默认值
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
    });
};

module.exports = {
  howOld
};
