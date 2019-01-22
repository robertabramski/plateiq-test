import React from 'react';
import css from './style.scss';
import { Badge } from 'reactstrap';

export default class OutlineBadge extends React.Component {
  render() {
    return (
      <div className={css.module}>
        <Badge color="primary" pill={true}>
          {this.props.name}
        </Badge>
      </div>
    );
  }
}
