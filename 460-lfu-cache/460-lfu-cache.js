/**
 * @param {number} capacity
 */
class Node {
  constructor(key=null, value=null) {
    this.key = key;
    this.val = value;
    this.next = this.prev = null;
    this.freq = 1;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  removeTail() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node.key;
  }

  isEmpty() {
    return this.head.next.val == null;
  }
}

const LFUCache = function(capacity) {
  this.capacity = capacity;
  this.currentSize = 0;
  this.leastFreq = 0;
  this.keyNodeMap = new Map();
  this.freqNodeMap = new Map();
};

LFUCache.prototype.get = function(key) {
  const node = this.keyNodeMap.get(key);
  if (!node) return -1;
  this.updateNode(node);
  return node.val;
};

LFUCache.prototype.put = function(key, value) {
  if (this.capacity == 0) return;
  const node = this.keyNodeMap.get(key);
  if (!node) {
    if (this.currentSize == this.capacity) {
      // Evict the least recently used key happens here!
      const tailKey = this.freqNodeMap.get(this.leastFreq).removeTail();
      this.keyNodeMap.delete(tailKey);
      this.currentSize -= 1;
    }
    // Since it's a new node, we need to increase current size.
    this.currentSize += 1;
    const newNode = new Node(key, value);
    this.insertNode(newNode);
    this.keyNodeMap.set(key, newNode);
    // We are sure it's gonna be 1, lol.
    this.leastFreq = 1;
  } else {
    node.val = value;
    this.updateNode(node);
  }
};

LFUCache.prototype.insertNode = function(node) {
  if (this.freqNodeMap.get(node.freq) == null) {
    this.freqNodeMap.set(node.freq, new DoublyLinkedList());
  }
  this.freqNodeMap.get(node.freq).insertHead(node);
}

/**
* 1) First it removes the node from current DLL,
* 2) If its frequency is leastFreq and its the only node in the DLL, increase the leastFreq,
* 3) Increase current node's frequency and insert it to the new DLL.
* Note that after step 1), the DLL could be an empty DLL, instead of clearing the frequency from the map,
* and deleting the empty DLL, we keep it empty, and no need to init a new DLL for the next key with this
* frequency, and potentially save some work, not bad!
*/
LFUCache.prototype.updateNode = function(node) {
  this.freqNodeMap.get(node.freq).removeNode(node);
  if (node.freq == this.leastFreq && this.freqNodeMap.get(node.freq).isEmpty()) {
    this.leastFreq += 1;
  }
  node.freq += 1;
  this.insertNode(node);
}
