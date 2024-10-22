class ArsumToken {
  constructor() {
    this.balances = new Map();
  }

  mint(address, amount) {
    if (typeof address !== 'string' || typeof amount !== 'number' || amount <= 0) {
      throw new TypeError('Invalid input');
    }
    const currentBalance = this.balances.get(address) || 0;
    this.balances.set(address, currentBalance + amount);
  }

  transfer(from, to, amount) {
    if (typeof from !== 'string' || typeof to !== 'string' || typeof amount !== 'number' || amount <= 0) {
      throw new TypeError('Invalid input');
    }
    const fromBalance = this.balances.get(from) || 0;
    if (fromBalance < amount) throw new Error('Insufficient balance');
    this.balances.set(from, fromBalance - amount);
    const toBalance = this.balances.get(to) || 0;
    this.balances.set(to, toBalance + amount);
  }

  demonstrate() {
    console.log('Arsum Token Demo');
    this.mint('user1', 100);
    this.transfer('user1', 'user2', 50);
    console.log('User1 balance:', this.balances.get('user1'));
    console.log('User2 balance:', this.balances.get('user2'));
  }

  getBalance(address) {
    return this.balances.get(address) || 0;
  }

  getTotalSupply() {
    return Array.from(this.balances.values()).reduce((a, b) => a + b, 0);
  }
}

module.exports = ArsumToken;
