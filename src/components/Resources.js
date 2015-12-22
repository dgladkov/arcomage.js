import React, { Component } from 'react';

import sprites from 'file!../images/sprites.png'

export class Resources extends Component {

  static propTypes = {
    bricks: React.PropTypes.number.isRequired,
    brickProduction: React.PropTypes.number.isRequired,
    gems: React.PropTypes.number.isRequired,
    gemProduction: React.PropTypes.number.isRequired,
    recruits: React.PropTypes.number.isRequired,
    recruitProduction: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={{...styles.container, ...this.props.style}}>
        <div style={{...styles.resourceQuantity, top: 56}}>{this.props.bricks}</div>
        <div style={{...styles.resourceProduction, top: 28}}>{this.props.brickProduction}</div>
        <div style={{...styles.resourceQuantity, top: 128}}>{this.props.gems}</div>
        <div style={{...styles.resourceProduction, top: 100}}>{this.props.gemProduction}</div>
        <div style={{...styles.resourceQuantity, top: 200}}>{this.props.recruits}</div>
        <div style={{...styles.resourceProduction, top: 172}}>{this.props.recruitProduction}</div>
      </div>
    );
  }

}

const disableTextSelection = {
  userSelect: 'none',
  msUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  cursor: 'default',
};

const styles = {
  container: {
    backgroundImage: `url("${sprites}")`,
    width: 78,
    height: 216,
    backgroundColor: 'green',
    backgroundPosition: '-145px -2px',
    position: 'relative',
  },
  resourceQuantity: {
    font: 'bold 14px Arial',
    position: 'absolute',
    width: 72,
    height: 15,
    left: 4,
    ...disableTextSelection,
  },
  resourceProduction: {
    font: 'bold 26px Arial',
    color: '#bbc105',
    position: 'absolute',
    width: 72,
    left: 4,
    ...disableTextSelection,
  }
};
