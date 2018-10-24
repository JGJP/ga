const clipboard = require('clipboardy');
const tfa = require('node-2fa');

let keys;
try { keys = require('./config'); } catch(e) {}

let arg = require('arg')({
    '--manual': String,
    '-m' : '--manual',
});

const key = arg['--manual'] || keys[arg._[0]];

clipboard.writeSync(tfa.generateToken(key).token);
console.log(clipboard.readSync());
