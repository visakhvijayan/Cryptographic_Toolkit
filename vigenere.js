// Vigenère cipher encryption function
function encrypt(plainText, key) {
  let result = '';
  for (let i = 0; i < plainText.length; i++) {
    let plainChar = plainText.charCodeAt(i);
    let keyChar = key.charCodeAt(i % key.length);
    let encryptedChar = String.fromCharCode((plainChar + keyChar) % 26 + 65);
    result += encryptedChar;
  }
  return result;
}

// Vigenère cipher decryption function
function decrypt(cipherText, key) {
  let result = '';
  for (let i = 0; i < cipherText.length; i++) {
    let cipherChar = cipherText.charCodeAt(i);
    let keyChar = key.charCodeAt(i % key.length);
    let decryptedChar = String.fromCharCode((cipherChar - keyChar + 26) % 26 + 65);
    result += decryptedChar;
  }
  return result;
}

// Event listener for the Encrypt button
document.getElementById('encryptButton').addEventListener('click', function() {
  let plainText = document.getElementById('input').value.toUpperCase();
  let key = document.getElementById('key').value.toUpperCase();
  let cipherText = encrypt(plainText, key);
  document.getElementById('output').value = cipherText;
});

// Event listener for the Decrypt button
document.getElementById('decryptButton').addEventListener('click', function() {
  let cipherText = document.getElementById('input').value.toUpperCase();
  let key = document.getElementById('key').value.toUpperCase();
  let plainText = decrypt(cipherText, key);
  document.getElementById('output').value = plainText;
});
