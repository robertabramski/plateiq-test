import React from 'react';
import css from './style.scss';
import { Container, Row } from 'reactstrap';

import InvoiceViewer from 'components/invoice-viewer';
import InvoiceApprover from 'components/invoice-approver';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = 'Plate IQ';
  }

  render() {
    return (
      <Container className={css.module}>
        <Row>
          <InvoiceViewer />
          <InvoiceApprover />
        </Row>
        {/**/}
        <div className="comp"></div>
      </Container>
    );
  }
}
