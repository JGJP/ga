const clipboard = require('clipboardy');
const tfa = require('node-2fa');
const keys = require('./config');

let arg = require('arg')({
    '--manual': String,
    '-m' : '--manual',
});

const key = arg['--manual'] || keys[arg._[0]];

clipboard.writeSync(tfa.generateToken(key).token);
console.log(clipboard.readSync());