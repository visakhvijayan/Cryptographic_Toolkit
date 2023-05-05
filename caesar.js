function encrypt() {
    let text = document.getElementById("input").value;
    let key = parseInt(document.getElementById("key").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }

    document.getElementById("output").value = result;
}

function decrypt() {
    let text = document.getElementById("input").value;
    let key = parseInt(document.getElementById("key").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - key + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - key + 26) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }

    document.getElementById("output").value = result;
}
