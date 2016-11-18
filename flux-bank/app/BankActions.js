import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {
  // CREATE ACCOUNT
  createAccount() {
    AppDispatcher.dispatch({
      type: bankConstants.CREATED_ACCOUNT,
      ammount: 0
    });
  },

  // DEPOSITE ACCOUNT
  depositIntoAccount(amount) {
    AppDispatcher.dispatch({
      type: bankConstants.DEPOSITED_INTO_ACCOUNT,
      amount: amount
    })
  },

  // WITHDRAW ACCOUNT
  withdrawFromAccount(amount) {
    AppDispatcher.dispatch({
      type: bankConstants.WITHDREW_FROM_ACCOUNT,
      amount: amount
    })
  }
}

export default BankActions;
