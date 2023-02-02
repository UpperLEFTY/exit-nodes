/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const map = {};

  for (let i = 0; i < order.length; i += 1) {
    map[order[i]] = i;
  }
outer:
  for (let i = 0; i < words.length - 1; i += 1) {
    const current = words[i];
    const next = words[i + 1];
    const minLength = Math.min(current.length, next.length);

    for (let i = 0; i < minLength; i += 1) {
      if (current[i] === next[i]) continue;
      if (map[current[i]] < map[next[i]]) continue outer;
      if (map[current[i]] > map[next[i]]) return false;
    }

    if (current.length > next.length) return false;
  }

  return true;
};