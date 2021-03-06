import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';

class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  render() {
    return(
      <div>
        <header>
          <img src="logo.svg" width="150" />Redux Bank - React-Redux
        </header>
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>

        <div className="exchange" onClick={this.props.onToggle}>
          <strong>Exchange Rates:</strong>
          <div className={this.props.showExchange ? 'exchange--visible' : 'exchange--closed'}>
            <strong>$1 USD =</strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>
          </div>
        </div>
      </div>
    );
  }
}

BankApp.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func,
  onToggle: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    showExchange: state.ui.showExchange
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.toggleExchange())
  }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)

render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);
