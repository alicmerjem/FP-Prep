// write pure function removeVowels
// takes a string as a parameter
// returns the string w/ removed vowels

const removeVowels = (str) => {
    let result = "";
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isVowel = false;
        for (let j = 0; i < vowels.length; j++) {
            if (char === vowels[i]) {
                isVowel = true;
                break;
            }
        }

        if (!isVowel) {
            result += char;
        }
    }
    return result;
};