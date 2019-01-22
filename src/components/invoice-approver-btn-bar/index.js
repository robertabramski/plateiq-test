import React from 'react';
import css from './style.scss';
import { Row, Col } from 'reactstrap';
import { Button, ButtonDropdown } from 'reactstrap';
import { DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import OutlineBadge from 'components/outline-badge';

export default class InvoiceApproverBtnBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    let dropDownModifiers = {
      offset: {offset: '0,34px'}
    };

    return (
      <Row className={css.module}>
        <Col align="left">
          <OutlineBadge name="Direct" />
        </Col>
        <Col align="right">
          <ButtonDropdown className="more"
            isOpen={this.state.isOpen}
            toggle={this.toggle}>
            <DropdownToggle caret={true} color="light">More</DropdownToggle>
            <DropdownMenu right={true} modifiers={dropDownModifiers}>
              <DropdownItem>Export</DropdownItem>
              <DropdownItem>Mark as exported</DropdownItem>
              <DropdownItem divider={true} />
              <DropdownItem>Setup vendor</DropdownItem>
              <DropdownItem divider={true} />
              <DropdownItem>Flag invoice</DropdownItem>
              <DropdownItem>Archive invoice</DropdownItem>
              <DropdownItem className="text-danger">Delete invoice</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Button className="approve" color="primary">Approve</Button>
        </Col>
      </Row>
    );
  }
}
