import React from 'react';
import css from './style.scss';
import { Table } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';

export default class InvoiceLineItems extends React.Component {
  state = {
    activeTab: 1
  }

  toggleTab(tab) {
    this.setState({activeTab: tab});
  }

  getActive = (tab) => {
    if(this.state.activeTab === tab) {
      return 'active';
    }

    return '';
  }

  render() {
    return (
      <div className={css.module}>
        <Nav tabs={true}>
          <NavItem>
            <NavLink href="#"
              className={this.getActive(1)}
              onClick={() => this.toggleTab(1)}>
              Line Items
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"
              className={this.getActive(2)}
              onClick={() => this.toggleTab(2)}>
              History
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            Line Items
          </TabPane>
          <TabPane tabId={2}>
            History
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
