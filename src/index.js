const PoST = require('./consensus/post');
const DistributedStorage = require('./storage/distributed');
const ArsumToken = require('./token/arsum');

function initializeSystem() {
  const post = new PoST();
  const storage = new DistributedStorage();
  const token = new ArsumToken();

  // セキュリティチェック
  if (post.nodes.size > 1000) {
    console.warn('Warning: Large number of nodes may impact performance');
  }

  if (storage.listKeys().length > 10000) {
    console.warn('Warning: Large number of stored items may impact performance');
  }

  if (token.getTotalSupply() > 1000000) {
    console.warn('Warning: Large total supply may impact token economics');
  }

  return { post, storage, token };
}

const system = initializeSystem();
console.log('AECRETEC system initialized');
