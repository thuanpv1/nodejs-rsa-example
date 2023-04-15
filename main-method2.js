const fs = require('fs')
const NodeRSA = require('node-rsa');

const privateKey = fs.readFileSync('private.pem', { encoding: 'utf-8' })
const publicKey = fs.readFileSync('pub.pem', { encoding: 'utf-8' })
const keyPri = new NodeRSA(privateKey, {encryptionScheme: 'pkcs1'});
const keyPub = new NodeRSA(publicKey)

// testing
const encryptedData1 = '52c20d363a6365795c588f76e4c8527fe14fb755a4c8a4013f9dd4cd67ff2e0f77f762db5f2035dc75d2f45a3324b643e554f4247a95814b7087de74dc4aba51'
const baseEnc= Buffer.from(encryptedData1, 'hex').toString('base64')
var decrypted = keyPri.decrypt(baseEnc, 'ascii')
console.log('decrypted ===', decrypted)