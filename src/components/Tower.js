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
      <div style={styles.container}>
        <div style={{...styles.towerCap, ...towerCapColorStyles[this.props.color]}} />
        <div style={{...styles.tower, height: this.props.height}} />
      </div>
    );
  }

}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 68,
  },
  tower: {
    backgroundImage: `url("${sprites}")`,
    width: 45,
    height: 0,
    backgroundPosition: '-72px -2px',
  },
  towerCap: {
    backgroundImage: `url("${sprites}")`,
    width: 68,
    height: 94,
  },
};

const towerCapColorStyles = {
  red: {
    backgroundPosition: '-2px -2px',
  },
  blue: {
    backgroundPosition: '-2px -99px',
  },
}
