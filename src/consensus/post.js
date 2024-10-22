class PoST {
  constructor() {
    this.nodes = new Map();
  }

  addNode(nodeId, space, time) {
    if (typeof nodeId !== 'string' || typeof space !== 'number' || typeof time !== 'number') {
      throw new TypeError('Invalid input types');
    }
    if (space <= 0 || time <= 0) {
      throw new Error('Space and time must be positive');
    }
    this.nodes.set(nodeId, { space, time });
  }

  demonstrate() {
    console.log('PoST Consensus Mechanism Demo');
    this.addNode('node1', 100, 24);
    this.addNode('node2', 200, 48);
    console.log('Nodes:', Object.fromEntries(this.nodes));
  }
}

module.exports = PoST;
