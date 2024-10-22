const PoST = require('../src/consensus/post');

describe('PoST', () => {
  let post;

  beforeEach(() => {
    post = new PoST();
  });

  test('addNode adds a node correctly', () => {
    post.addNode('node1', 100, 24);
    expect(post.nodes.get('node1')).toEqual({ space: 100, time: 24 });
  });

  test('addNode throws error for invalid input', () => {
    expect(() => post.addNode('node1', -100, 24)).toThrow('Space and time must be positive');
    expect(() => post.addNode('node1', '100', 24)).toThrow('Invalid input types');
  });

  test('calculateConsensus returns correct values', () => {
    post.addNode('node1', 100, 24);
    post.addNode('node2', 200, 48);
    const consensus = post.calculateConsensus();
    expect(consensus).toEqual({
      totalSpace: 300,
      totalTime: 72,
      nodeCount: 2
    });
  });
});
