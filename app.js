const clipboard = require('clipboardy');
const tfa = require('node-2fa');
const keys = require('./config');

const arg = require('arg')({})._[0];

clipboard.writeSync(tfa.generateToken(keys[arg]).token);
console.log(clipboard.readSync());