import React, { Component } from 'react';

import sprites from 'file!../images/sprites.png'

export class Wall extends Component {

  static propTypes = {
    height: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={{...styles.wall, height: this.props.height, ...this.props.style}} />
    );
  }

}

const styles = {
  wall: {
    backgroundImage: `url("${sprites}")`,
    width: 22,
    height: 0,
    backgroundPosition: '-120px -2px',
  },
};
