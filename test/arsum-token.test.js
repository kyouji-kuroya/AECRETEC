const ArsumToken = require('../src/token/arsum');

describe('ArsumToken', () => {
  let token;

  beforeEach(() => {
    token = new ArsumToken();
  });

  test('mint tokens correctly', () => {
    token.mint('user1', 100);
    expect(token.balances.get('user1')).toBe(100);
  });

  test('transfer tokens correctly', () => {
    token.mint('user1', 100);
    token.transfer('user1', 'user2', 50);
    expect(token.balances.get('user1')).toBe(50);
    expect(token.balances.get('user2')).toBe(50);
  });

  test('throws error for insufficient balance', () => {
    token.mint('user1', 100);
    expect(() => token.transfer('user1', 'user2', 150)).toThrow('Insufficient balance');
  });

  test('getBalance returns correct balance', () => {
    token.mint('user1', 100);
    expect(token.getBalance('user1')).toBe(100);
    expect(token.getBalance('user2')).toBe(0);
  });

  test('getTotalSupply returns correct total supply', () => {
    token.mint('user1', 100);
    token.mint('user2', 50);
    expect(token.getTotalSupply()).toBe(150);
  });
});
