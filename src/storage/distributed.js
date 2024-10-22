class DistributedStorage {
  constructor() {
    this.storage = new Map();
  }

  store(key, value) {
    if (typeof key !== 'string') {
      throw new TypeError('Key must be a string');
    }
    this.storage.set(key, value);
  }

  retrieve(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Key must be a string');
    }
    return this.storage.get(key);
  }

  demonstrate() {
    console.log('Distributed Storage System Demo');
    this.store('file1', 'Content of file 1');
    console.log('Retrieved:', this.retrieve('file1'));
  }

  listKeys() {
    return Array.from(this.storage.keys());
  }

  removeKey(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Key must be a string');
    }
    return this.storage.delete(key);
  }
}

module.exports = DistributedStorage;
