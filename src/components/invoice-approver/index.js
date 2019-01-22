import React from 'react';
import css from './style.scss';
import { Row, Col } from 'reactstrap';

import InvoiceApproverBtnBar from 'components/invoice-approver-btn-bar';
import InvoiceApproverTitleBar from 'components/invoice-approver-title-bar';
import InvoiceApproverInfo from 'components/invoice-approver-info';
import InvoiceApproverInfoSmall from 'components/invoice-approver-info-small';
import InvoiceMemo from 'components/invoice-memo';
import InvoiceLineItems from 'components/invoice-line-items';

export default class InvoiceApprover extends React.Component {
  state = {
    infoCollapsed: false,
    memo: 'Lorem ipsum'
  }

  toggleInfo = (collapse) => {
    this.setState({infoCollapsed: collapse});
  }

  updateMemo = (memo) => {
    this.setState({memo: memo});
  }

  render() {
    return (
      <Col
        className={css.module}
        xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{size: 7, order: 2}} xl={{size: 6}}>
        <InvoiceApproverBtnBar />
        <InvoiceApproverTitleBar
          collapsed={this.state.infoCollapsed}
          onCollapse={this.toggleInfo} />
        {
          this.state.infoCollapsed ?
            <InvoiceApproverInfoSmall memo={this.state.memo} /> :
            <InvoiceApproverInfo>
              <InvoiceMemo memo={this.state.memo} onMemoChange={this.updateMemo} />
            </InvoiceApproverInfo>
        }
      </Col>
    );
  }
}
