const DistributedStorage = require('../src/storage/distributed');

describe('DistributedStorage', () => {
  let storage;

  beforeEach(() => {
    storage = new DistributedStorage();
  });

  test('store and retrieve data correctly', () => {
    storage.store('key1', 'value1');
    expect(storage.retrieve('key1')).toBe('value1');
  });

  test('throws error for invalid key type', () => {
    expect(() => storage.store(123, 'value')).toThrow('Key must be a string');
    expect(() => storage.retrieve(123)).toThrow('Key must be a string');
  });

  test('listKeys returns all stored keys', () => {
    storage.store('key1', 'value1');
    storage.store('key2', 'value2');
    expect(storage.listKeys()).toEqual(['key1', 'key2']);
  });

  test('removeKey removes the specified key', () => {
    storage.store('key1', 'value1');
    expect(storage.removeKey('key1')).toBe(true);
    expect(storage.retrieve('key1')).toBeUndefined();
  });
});
