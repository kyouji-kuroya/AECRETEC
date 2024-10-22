const PoST = require('./consensus/post');
const DistributedStorage = require('./storage/distributed');
const ArsumToken = require('./token/arsum');

console.log('AECRETEC Prototype Initialized');

// 基本的な機能のデモンストレーション
const post = new PoST();
const storage = new DistributedStorage();
const token = new ArsumToken();

post.demonstrate();
storage.demonstrate();
token.demonstrate();
