const crypto = require("crypto")
const fs = require('fs');


// case1: decrypt an exist output using private key

let publicKey = fs.readFileSync('pub.pem')
let privateKey = fs.readFileSync('private.pem')

console.log('privateKey===', privateKey.toString('hex'))
let test = crypto.privateDecrypt({
    key: privateKey.toString(),
    passphrase: '',
    padding: crypto.constants.RSA_PKCS1_PADDING,
}, Buffer.from('a303e2f06a4c0a453410bb8d699da671a126161f954cd513ac5435eb0dd540c088b120453b4d7b4219df015f1c91d888996d95a477f46bca1b4a188937e5e485', 'hex'))

console.log('decrypted result===', test.toString('ascii'))
