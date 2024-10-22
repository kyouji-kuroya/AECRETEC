const PoST = require('../src/consensus/post');
const DistributedStorage = require('../src/storage/distributed');
const ArsumToken = require('../src/token/arsum');

describe('AECRETEC Integration', () => {
  let post, storage, token;

  beforeEach(() => {
    post = new PoST();
    storage = new DistributedStorage();
    token = new ArsumToken();
  });

  test('Full workflow integration', () => {
    // PoST
    post.addNode('node1', 100, 24);
    post.addNode('node2', 200, 48);
    const consensus = post.calculateConsensus();
    expect(consensus.nodeCount).toBe(2);

    // DistributedStorage
    storage.store('key1', JSON.stringify(consensus));
    const retrievedConsensus = JSON.parse(storage.retrieve('key1'));
    expect(retrievedConsensus).toEqual(consensus);

    // ArsumToken
    token.mint('node1', consensus.totalSpace);
    token.mint('node2', consensus.totalTime);
    expect(token.getTotalSupply()).toBe(consensus.totalSpace + consensus.totalTime);

    token.transfer('node1', 'user1', 50);
    expect(token.getBalance('user1')).toBe(50);
  });
});

