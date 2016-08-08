import React, {Component} from 'react';
import './css/pillheader.css';

export default class PillHeader extends Component {
  render() {
    let style = "pillHeader ";
    if(this.props.secondaryStyle === true) {
      style += "secondaryStyle";
    } else {
      style += "primaryStyle";
    }

    return (
      <div className={style}>{this.props.value}</div>
    );
  }
}

PillHeader.defaultProps = {
  secondaryStyle: false
};

PillHeader.propTypes = {
  value: React.PropTypes.string.isRequired,
  secondaryStyle: React.PropTypes.bool
};
