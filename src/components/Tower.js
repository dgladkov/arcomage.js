import React, { Component } from 'react';

import sprites from 'file!../images/sprites.png'

export class Tower extends Component {

  static propTypes = {
    color: React.PropTypes.oneOf(['red', 'blue']).isRequired,
    height: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={{...styles.container, ...this.props.style}}>
        <div style={{...styles.towerCap, ...towerCapColorStyles[this.props.color]}} />
        <div style={{...styles.tower, height: this.props.height}} />
        <div style={styles.heightWrapper}>
          <div style={styles.height}>{this.props.height}</div>
        </div>
      </div>
    );
  }

}

const styles = {
  container: {
    width: 68,
  },
  tower: {
    backgroundImage: `url("${sprites}")`,
    width: 45,
    height: 0,
    backgroundPosition: '-72px -2px',
    margin: '0 auto',
  },
  towerCap: {
    backgroundImage: `url("${sprites}")`,
    width: 68,
    height: 94,
  },
  heightWrapper: {
    width: 43,
    height: 18,
    border: '2px solid #000',
    padding: 1,
    margin: '-13px auto 0 auto',
    opacity: 0.8,
  },
  height: {
    font: '11px Arial',
    textAlign: 'center',
    height: 18,
    backgroundColor: '#000',
    color: '#b1b195',
    lineHeight: '18px',
    verticalAlign: 'middle',
  }
};

const towerCapColorStyles = {
  red: {
    backgroundPosition: '-2px -2px',
  },
  blue: {
    backgroundPosition: '-2px -99px',
  },
}
