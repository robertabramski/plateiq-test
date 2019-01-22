import React from 'react';
import css from './style.scss';
import { Button } from 'reactstrap';

import LilLabel from 'components/lil-label';
import VendorMapping from 'components/vendor-mapping';

export default class InvoiceApproverTitleBar extends React.Component {
  state = {
    collapsed: this.props.collapsed || false
  };

  toggleCollapse = () => {
    this.setState({collapsed: !this.state.collapsed}, () => {
      this.props.onCollapse(this.state.collapsed);
    });
  }

  render() {
    return (
      <div className={css.module}>
        {this.state.collapsed ? null : <LilLabel name="Vendor" />}
        <h3>
          Freguesia Cheese
          <Button color="light" onClick={this.toggleCollapse} className="btn-round">i</Button>
        </h3>
        {this.state.collapsed ? null : <VendorMapping mapped={true} />}
      </div>
    );
  }
}
