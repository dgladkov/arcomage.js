import React, { Component } from 'react';
import { Card } from './Card';
import cards from 'json!../cards.json';

const resourceTypeToColorMap = {
  0: 'red',
  1: 'blue',
  2: 'green',
};

export class CardViewer extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

  state = {
    hidden: true,
  }

  render() {
    if (this.state.hidden) {
      return null;
    }
    return (
      <div style={styles.container}>
        <div
          onClick={() => this.setState({hidden: true})}
          style={styles.hideButton}
        >
          x
        </div>
        {cards.map((card) => (
          <Card
            color={resourceTypeToColorMap[card.resourceType]}
            cost={card.cost}
            description={card.description}
            image={card.image}
            key={card.name}
            name={card.name}
            onClick={() => card.actions.forEach(this.props.dispatch)}
            onContextMenu={() => {}}
            style={styles.card}
          />
        ))}
      </div>
    );
  }

}

const styles = {
  container: {
    backgroundColor: '#000',
    position: 'absolute',
    overflowY: 'scroll',
    zIndex: 99,
    display: 'flex',
    flexWrap: 'wrap',
    width: 640,
    height: 480,
    top: 0,
    left: 0,
  },
  hideButton: {
    position: 'absolute',
    zIndex: 999,
    color: 'red',
    top: 2,
    right: 2,
    cursor: 'pointer',
  },
  card: {
    margin: 5,
  },
};
