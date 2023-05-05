// Function to check if a number is coprime to 26
function isCoprime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && 26 % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the modular multiplicative inverse of a number
function findInverse(a) {
    for (let i = 1; i < 26; i++) {
        if ((i * a) % 26 === 1) {
            return i;
        }
    }
    return -1;
}

// Function to encrypt a message using the Affine Cipher
function encrypt() {
    const plaintext = document.getElementById("input").value;
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    if (!isCoprime(a)) {
        alert("a must be coprime to 26");
        return;
    }
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((a * (charCode - 65)) + b) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((a * (charCode - 97)) + b) % 26 + 97;
        }
        ciphertext += String.fromCharCode(charCode);
    }
    document.getElementById("output").value = ciphertext;
}

// Function to decrypt a message using the Affine Cipher
function decrypt() {
    const ciphertext = document.getElementById("input").value;
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    if (!isCoprime(a)) {
        alert("a must be coprime to 26");
        return;
    }
    const aInverse = findInverse(a);
    if (aInverse === -1) {
        alert("a has no inverse modulo 26");
        return;
    }
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = (((charCode - 65) - b) * aInverse) % 26;
            if (charCode < 0) {
                charCode += 26;
            }
            charCode += 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (((charCode - 97) - b) * aInverse) % 26;
            if (charCode < 0) {
                charCode += 26;
            }
            charCode += 97;
        }
        plaintext += String.fromCharCode(charCode);
    }
    document.getElementById("output").value = plaintext;
}
