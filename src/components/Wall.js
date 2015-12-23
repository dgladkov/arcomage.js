import React, { Component } from 'react';

import sprites from 'file!../images/sprites.png';

export class Wall extends Component {

  static propTypes = {
    height: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={{...styles.container, ...this.props.style}}>
        <div style={{...styles.wall, height: this.props.height * 1.5}} />
        <div style={styles.heightWrapper}>
          <div style={styles.height}>{this.props.height}</div>
        </div>
      </div>
    );
  }

}

const styles = {
  container: {
    width: 39,
  },
  wall: {
    backgroundImage: `url("${sprites}")`,
    width: 22,
    height: 0,
    backgroundPosition: '-120px -2px',
    margin: '0 auto',
  },
  heightWrapper: {
    width: 33,
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
