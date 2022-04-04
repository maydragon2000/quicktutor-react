//  var CryptoJS = require("crypto-js");
import crypto from 'crypto-js';

export function AESEncrypt(pureText) {
    const privateKey = `secret key 123`;
    var ciphertext = encodeURIComponent(crypto.AES.encrypt(JSON.stringify(pureText), privateKey).toString());
    return ciphertext;
}

export function AESDecrypt(encryptedText) {
    const privateKey = `secret key 123`;
    var bytes = crypto.AES.decrypt(decodeURIComponent(encryptedText), privateKey);
    var decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    return decryptedData;
}