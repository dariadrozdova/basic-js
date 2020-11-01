const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
  }

  encrypt(message, key) {

    if (!message || !key) throw new Error();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let charNum = (message[i].charCodeAt() + (key[j % key.length]).charCodeAt() - 130) % 26;
        let char = alphabet.charAt(charNum);
        result += char;
        j++;
      } else {
        result += message[i];
      }
    }

    return this.type === 'reverse' ? result.split('').reverse().join('') : result;
  }


  decrypt(message, key) {
    if (!message || !key) throw new Error();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let charNum = (message[i].charCodeAt() - (key[j % key.length]).charCodeAt() + 104) % 26;
        let char = alphabet.charAt(charNum);
        result += char;
        j++;
      } else {
        result += message[i];
      }
    }
    return this.type === 'reverse' ? result.split('').reverse().join(''): result;
  }
}

module.exports = VigenereCipheringMachine;
