import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Tower } from '../components/Tower';
import { Wall } from '../components/Wall';
import { Card } from '../components/Card';
import { Resources } from '../components/Resources';
import { PlayerName } from '../components/PlayerName';

import background from 'file!../images/background.png';

class App extends Component {
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
        />
        <div style={styles.hand}>
          {player.hand.map((card) => (
            <Card
              color="red"
              cost={card.cost}
              description={card.description}
              image={card.image}
              key={card.name}
              name={card.name}
              onClick={() => card.actions.forEach(this.props.dispatch)}
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
