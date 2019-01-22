import React from 'react';
import css from './style.scss';
import { Row, Col } from 'reactstrap';

import LilLabel from 'components/lil-label';
import InvoiceInfoItem from 'components/invoice-info-item';
import InvoiceMemo from 'components/invoice-memo';

export default class InvoiceApproverInfoSmall extends React.Component {
  state = {
    memo: this.props.memo
  }

  render() {
    return (
      <Row className={css.module}>
        <Col xl="2">
          <InvoiceInfoItem info="00003526" />
        </Col>
        <Col xl="2">
          <InvoiceInfoItem info="Jul 09, 2017" />
        </Col>
        <Col xl="3">
          <InvoiceInfoItem info="Monty’s Cheese Shop" />
        </Col>
        <Col xl="2">
          <InvoiceMemo memo={this.state.memo} />
        </Col>
        <Col xl="3">
          <div className="invoice-item-base total">
            <LilLabel name="Total" total={true}>$10,000.00</LilLabel>
          </div>
        </Col>
      </Row>
    );
  }
}
