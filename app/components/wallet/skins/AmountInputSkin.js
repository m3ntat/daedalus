import React, { Component } from 'react';
import { defineMessages, intlShape } from 'react-intl';
import BigNumber from 'bignumber.js';
import InputSkin from 'react-polymorph/lib/skins/simple/InputSkin';
import styles from './AmountInputSkin.scss';

const messages = defineMessages({
  feesLabel: {
    id: 'wallet.amountInput.feesLabel',
    defaultMessage: '!!!+ {amount} of fees',
    description: 'Label for the "+ 12.042481 of fees" message above amount input field.'
  },
});

export default class AmountInputSkin extends Component {

  props: {
    currency: string,
    fees: BigNumber,
    total: BigNumber,
    error: boolean,
  };

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { error, fees, total, currency } = this.props;
    const { intl } = this.context;

    return (
      <div className={styles.root}>
        <InputSkin {...this.props} />
        {!error && (
          <span className={styles.fees}>
            {intl.formatMessage(messages.feesLabel, { amount: fees })}
          </span>
        )}
        <span className={styles.total}>
          {!error && `= ${total} `}{currency}
        </span>
      </div>
    );
  }

}
