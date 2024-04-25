function longestIdealString(s: string, k: number): number {
     const longestSubseqLengths = new Array(26).fill(0);
    for (const char of s) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        let maxLength = 0;
// Iterate over all possible characters to update the current character's maximum length.
        for (let i = 0; i < 26; i++) {
// If the current character is within 'k' distance of character at index 'i'
// in the alphabet, update the max length if a longer subsequence is found.
            if (Math.abs(index - i) <= k) {
                maxLength = Math.max(maxLength, longestSubseqLengths[i] + 1);
            }

        }
    longestSubseqLengths[index] = Math.max(longestSubseqLengths[index], maxLength);

    }

return longestSubseqLengths.reduce((maxValue, currentLength) => Math.max(maxValue, currentLength), 0);

};