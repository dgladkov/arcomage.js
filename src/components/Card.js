import React, { Component } from 'react';

import cards from 'file!../images/cards.png';
import sprites from 'file!../images/sprites.png';

export class Card extends Component {

  static propTypes = {
    color: React.PropTypes.oneOf(['red', 'green', 'blue']).isRequired,
    cost: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      row: React.PropTypes.number.isRequired,
      column: React.PropTypes.number.isRequired,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    style: React.PropTypes.object,
  };

  state = { hovered: false };

  render() {
    const { image } = this.props;
    const backgroundPosition = `-${ image.column * 88 }px -${ image.row * 52 }px`;
    return (
      <div
        onClick={this.props.onClick}
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{
          ...styles.card,
          ...cardColorStyles[this.props.color],
          ...(this.state.hovered ? styles.cardHover : null),
          ...this.props.style,
        }}
      >
        <div style={styles.cardName}>{this.props.name}</div>
        <div style={{...styles.cardImage, backgroundPosition}}/>
        <div style={styles.cardDescription}>
          {this.props.description.split('\\n').map((item, index) => (
            (index === 0) ? item : [<br />, item]
          ))}
        </div>
        <div style={styles.cardCost}>{this.props.cost}</div>
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
  card: {
    backgroundImage: `url("${sprites}")`,
    width: 96,
    height: 128,
    position: 'relative',
  },
  cardHover: {
    marginTop: -10,
  },
  cardCost: {
    font: '12px Arial',
    position: 'absolute',
    bottom: 6,
    right: 0,
    width: 20,
    height: 12,
    textAlign: 'center',
    ...disableTextSelection,
  },
  cardDescription: {
    font: '12px Arial',
    textAlign: 'center',
    position: 'absolute',
    width: 96,
    top: 80,
    ...disableTextSelection,
  },
  cardImage: {
    backgroundImage: `url("${cards}")`,
    width: 88,
    height: 52,
    position: 'absolute',
    top: 20,
    left: 4,
  },
  cardName: {
    font: '11px Arial',
    textAlign: 'center',
    position: 'absolute',
    width: 96,
    top: 4,
    left: 0,
    ...disableTextSelection,
  },
};

const cardColorStyles = {
  red: {
    backgroundPosition: '-2px -228px',
  },
  green: {
    backgroundPosition: '-202px -228px',
  },
  blue: {
    backgroundPosition: '-102px -228px',
  },
};
