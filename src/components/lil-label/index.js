import React from 'react';
import css from './style.scss';
import { Row, Col } from 'reactstrap';

export default class LilLabel extends React.Component {
  render() {
    let total = this.props.total ? 'total' : '';

    return (
      <Row className={css.module}>
        <Col><span>{this.props.name}</span></Col>
        {
          this.props.children ?
          <Col className="text-right">
            <span className={`line-item ${total}`}>
              {this.props.children}
            </span>
          </Col>
          : null
        }
      </Row>
    );
  }
}
