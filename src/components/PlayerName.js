import React, { Component } from 'react';

import sprites from 'file!../images/sprites.png'

export class PlayerName extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={{...styles.container, ...this.props.style}}>
        <div style={styles.name}>{this.props.name.toUpperCase()}</div>
      </div>
    );
  }

}

const styles = {
  container: {
    width: 72,
    height: 18,
    border: '2px solid #000',
    padding: 1,
    margin: '0 auto -9px auto',
  },
  name: {
    font: '11px Arial',
    textAlign: 'center',
    height: 18,
    backgroundColor: '#000',
    color: '#b1b195',
    opacity: 0.8,
    lineHeight: '18px',
    verticalAlign: 'middle',
  }
};
