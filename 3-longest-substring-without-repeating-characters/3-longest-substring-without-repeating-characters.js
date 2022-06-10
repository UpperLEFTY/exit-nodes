/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 let currentString = [];
    let longestStringLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        // get chars position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // need to check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // splice after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }
        // add character to the array
        currentString.push(s[i]);

        // Store string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};