#!/usr/bin/env node
const figlet = require('figlet');

/**
	 * Logo print out
	 */
module.exports = new class {
  logo() {
    figlet('Project Template!!', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    });
  }
}();
