import React from 'react';
import css from './style.scss';
import { Input } from 'reactstrap';

export default class InvoiceMemo extends React.Component {
  state = {
    memo: this.props.memo || ''
  }

  onChange = (event) => {
    this.setState({memo: event.target.value}, () => {
      if(this.props.onMemoChange) {
        this.props.onMemoChange(this.state.memo);
      }
    });
  }

  truncateMemo = (memo) => {
    if(memo && memo.length) {
      let limit = 10;
      return memo.length > limit ? `${memo.slice(0, limit)}...` : memo;
    }
  }

  render() {
    return (
      <div className={css.module}>
        {
          this.props.onMemoChange ?
            <Input
              className="info"
              defaultValue={this.props.memo}
              onChange={this.onChange}
              placeholder="Click here to enter Memo" /> :
            <p className="info">{this.truncateMemo(this.state.memo)}</p>
        }
      </div>
    );
  }
}
