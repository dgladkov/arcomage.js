import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Tower } from '../components/Tower';
import { Wall } from '../components/Wall';
import { Card } from '../components/Card';
import { CardViewer } from '../components/CardViewer';
import { Resources } from '../components/Resources';
import { PlayerName } from '../components/PlayerName';

import { discardPlayerCard, endTurn } from '../actions';

import background from 'file!../images/background.png';

const resourceTypeToColorMap = {
  0: 'red',
  1: 'blue',
  2: 'green',
};

class App extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    game: React.PropTypes.object.isRequired,
  }

  discardCard(index) {
    this.props.dispatch(discardPlayerCard(index));
    this.props.dispatch(endTurn());
  }

  dispatchActions(actions) {
    actions.forEach(this.props.dispatch);
  }

  render() {
    const { player, opponent } = this.props.game;
    return (
      <div style={styles.container}>
        <Tower
          color="red"
          height={player.tower}
          style={styles.leftTower}
        />
        <Wall
          height={player.wall}
          style={styles.leftWall}
        />
        <Wall
          height={opponent.wall}
          style={styles.rightWall}
        />
        <Tower
          color="blue"
          height={opponent.tower}
          style={styles.rightTower}
        />
        <PlayerName
          name="Player 1"
          style={styles.leftPlayerName}
        />
        <PlayerName
          name="Player 2"
          style={styles.rightPlayerName}
        />
        <Resources
          brickProduction={player.brickProduction}
          bricks={player.bricks}
          gemProduction={player.gemProduction}
          gems={player.gems}
          recruitProduction={player.recruitProduction}
          recruits={player.recruits}
          style={styles.leftResources}
        />
        <Resources
          brickProduction={opponent.brickProduction}
          bricks={opponent.bricks}
          gemProduction={opponent.gemProduction}
          gems={opponent.gems}
          recruitProduction={opponent.recruitProduction}
          recruits={opponent.recruits}
          style={styles.rightResources}
        /> <CardViewer dispatch={this.props.dispatch} />
        <div style={styles.hand}>
          {player.hand.map((card, index) => (
            <Card
              color={resourceTypeToColorMap[card.resourceType]}
              cost={card.cost}
              description={card.description}
              image={card.image}
              key={index}
              name={card.name}
              onClick={() => this.dispatchActions(card.actions)}
              onContextMenu={(e) => {
                e.preventDefault();
                if (card.canBeDiscarded) {
                  return this.discardCard(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

export default connect(
  mapStateToProps,
)(App);

const styles = {
  container: {
    backgroundColor: '#000',
    backgroundImage:`url("${background}")`,
    width: 640,
    height: 480,
    position: 'relative',
  },
  leftTower: {
    position: 'absolute',
    bottom: 158,
    left: 91,
  },
  rightTower: {
    position: 'absolute',
    bottom: 158,
    right: 91,
  },
  leftWall: {
    position: 'absolute',
    bottom: 158,
    left: 171,
  },
  rightWall: {
    position: 'absolute',
    bottom: 158,
    right: 171,
  },
  leftPlayerName: {
    position: 'absolute',
    top: 13,
    left: 8,
  },
  rightPlayerName: {
    position: 'absolute',
    top: 13,
    right: 8,
  },
  leftResources: {
    position: 'absolute',
    top: 56,
    left: 8,
  },
  rightResources: {
    position: 'absolute',
    top: 56,
    right: 8,
  },
  hand: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 640,
    height: 169,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
};
