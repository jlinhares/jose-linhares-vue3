
export default {
  _payments: [
      // {name: 'Payment1', amount: 22, code: 23, grid: ['a', 'b', 'c']},
      // {name: 'Payment1', amount: 12, code: 34, grid: ['a', 'b', 'c', 'd']},
      // {name: 'Payment1', amount: 21, code: 93, grid: ['a', 'b']},
      // {name: 'Payment1', amount: 32, code: 25, grid: ['a', 'b', 'c']},
      // {name: 'Payment1', amount: 23, code: 56, grid: ['a', 'b', 'c', 'e', 'f']}
  ],
  
  get payments() {
    return this._payments.slice();  // return a copy
  },

  get acceptPayment() {
    return this.$generator.isPlaying;
  },

  addPayment(name, amount) {
    this._payments.push({
      name,
      amount,
      code: this.$generator.code,
      grid: this.$generator.grid
    });
    this.$eventbus.emit('payment');
  }
}
