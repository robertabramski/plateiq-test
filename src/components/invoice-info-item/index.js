import React from 'react';
import css from './style.scss';

import LilLabel from 'components/lil-label';

export default class InvoiceInfoItem extends React.Component {
  render() {
    return (
      <div className={css.module}>
        {this.props.label ? <LilLabel name={this.props.label} /> : null}
        {this.props.info ? <p className="info">{this.props.info}</p> : null}
      </div>
    );
  }
}
