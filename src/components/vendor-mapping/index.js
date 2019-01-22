import React from 'react';
import css from './style.scss';

export default class VendorMapping extends React.Component {
  render() {
    let mapped = this.props.mapped;
    let mapColor = mapped ? 'success' : 'danger';

    return (
      <div className={css.module}>
        <small className={`text-${mapColor}`}>
          <i className={`${mapColor}`}></i>
          This vendor is {mapped ? '' : 'not'} mapped
        </small>
      </div>
    );
  }
}
