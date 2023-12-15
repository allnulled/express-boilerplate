module.exports = require(__dirname + "/load.js")().then(function({ api, deploy }) {
  return deploy();
}).catch(console.log);
