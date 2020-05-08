const caesar = function() {
    const argArray = Array.from(arguments[0]);
    const shift = arguments[1] % 26;

    const cipher = argArray.map(character => {
        if (character.match(/[a-zA-Z]/i)) {
            const code = character.charCodeAt();
            
            if ((code >= 65) && code <= 90) {
                newCharCode = ((code - 65 + shift) % 26) + 65;
                if (newCharCode < 65) {
                    newCharCode += 26;
                }

            } else if ((code >= 97) && (code <= 122)) {
                newCharCode = ((code - 97 + shift) % 26) + 97;
                if (newCharCode < 97) {
                    newCharCode += 26;
                }
            }

            return String.fromCharCode(newCharCode);
        } else {
            return character;
        }
    })

    return cipher.join("");
}

module.exports = caesar
