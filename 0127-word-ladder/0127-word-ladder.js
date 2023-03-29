/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let queue = [];
  let step = 0;
  let word = '';
  let len = 0;
  let i = 0;

  pushNextWord(beginWord, queue, wordSet);
  step = 2;

  while (len = queue.length) {
    for (i = 0; i < len; i++) {
      word = queue.shift();
      if (word === endWord) return step;
      pushNextWord(word, queue, wordSet);
    }
    step++;
  }

  return 0;
};

 let pushNextWord = function (word, queue, wordSet) {
 let start = 'a'.charCodeAt(0);
 let len = word.length;
 let str = '';

  wordSet.delete(word);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 26; j++) {
      str = word.substr(0, i) + String.fromCharCode(j + start) + word.substr(i + 1);

      if (wordSet.has(str)) {
        queue.push(str);
        wordSet.delete(str);
      }
    }
  }
};