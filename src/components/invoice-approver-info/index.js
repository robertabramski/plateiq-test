import React from 'react';
import css from './style.scss';
import { Col, Row } from 'reactstrap';

import InvoiceInfoItem from 'components/invoice-info-item';
import LilLabel from 'components/lil-label';

export default class InvoiceApproverInfo extends React.Component {
  render() {
    return (
      <Row className={css.module}>
        <Col>
          <Row>
            <Col>
              <Row><InvoiceInfoItem label="Invoice No."  info="00003526" /></Row>
              <Row><InvoiceInfoItem label="Posting Date" info="Jul 14, 2017" /></Row>
            </Col>
            <Col>
              <Row><InvoiceInfoItem label="Invoice Type" info="Receipt" /></Row>
              <Row><InvoiceInfoItem label="Invoice Date" info="Jul 09, 2017" /></Row>
            </Col>
            <Col>
              <Row><InvoiceInfoItem label="Restaurant" info="Monty’s Cheese Shop" /></Row>
              <Row><InvoiceInfoItem label="Due Date" info="Sep 09, 2017" /></Row>
            </Col>
            <Col>
              <Row>
                <div className="invoice-item-base">
                  <LilLabel name="Subtotal">$1,300.00</LilLabel>
                  <LilLabel name="Tax">$26.32</LilLabel>
                </div>
              </Row>
              <Row>
                <div className="invoice-item-base">
                  <LilLabel name="Total" total={true}>$10,000.00</LilLabel>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl="6">{this.props.children}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
