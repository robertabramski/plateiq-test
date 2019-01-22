import React from 'react';
import css from './style.scss';
import { Col } from 'reactstrap';
import invoice from './invoice.png';

export default class InvoiceViewer extends React.Component {
  render() {
    return (
      <Col
        className={css.module}
        xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{size: 5, order: 1}} xl={{size: 6}}>
        <img src={invoice} className="img-fluid invoice" />
      </Col>
    );
  }
}
