
class Trie {
  constructor() {
    this.links = new Map();
    this.isWord = false;
  }
  insert(word) {
    let node = this;
    for (const c of word) {
      if (!node.links.has(c)) node.links.set(c, new Trie());
      node = node.links.get(c);
    }
    node.isWord = true;
  }
  search(word) {
    const node = this.traverse(word);
    return node ? node.isWord : false;
  }
  startsWith(prefix) {
    const node = this.traverse(prefix);
    return node !== null;
  }
  traverse(word) {
    let node = this;
    for (const c of word) {
      if (node.links.has(c)) node = node.links.get(c);
      else return null;
    }
    return node;
  }
}

