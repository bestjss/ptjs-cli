#!/usr/bin/env node
const merge = require('deepmerge');
const question_config = require('./question-add');

const new_project_config = async () => {
  const base = await question_config.base.question();
  const language = await question_config.language.question();
  const remote = await question_config.remote.question();
  const answers = merge.all([ base, language, remote ]);
  console.log(answers);
  return answers;
};

module.exports = {
  new_project_config
};
