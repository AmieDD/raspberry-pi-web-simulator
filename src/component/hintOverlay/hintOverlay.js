import React, { Component } from 'react';
import './hintOverlay.css';

class HintOverlay extends Component {
  render() {
    return (
      <div onClick={this.props.closeHint} className="hint-overlay" style={{display: this.props.needShowHint ? "block" : "none"}}>
        You may want to get help first!
      </div>
    );
  }
}

export default HintOverlay;