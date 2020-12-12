
function caesarCipher(string, shift) {
    let splitString = string.split('');
    let newString = '';
    let newChar;

    for (let i = 0; i < splitString.length; i++) {

        let charCode = splitString[i].charCodeAt(0);

        if (charCode >= 97 && charCode <= 122) {
            let newCode = ((charCode - 97) + shift) % 26;

            if (newCode < 0) { 
                newCode = newCode + 26;
            }
         
            newChar = String.fromCharCode(newCode + 97)

        } else if (charCode >= 65 && charCode <= 90) {
            
            let newCode = ((charCode - 65) + shift) % 26;

            if (newCode < 0) { 
                newCode = newCode + 26;
            }
         
            newChar = String.fromCharCode(newCode + 65)

        } else {
            newChar = String.fromCharCode(charCode);
        }
        
        newString += newChar;

    }

    return newString;
}





module.exports = caesarCipher