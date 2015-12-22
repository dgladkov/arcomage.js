import React, { Component } from 'react';
import { Tower } from './components/Tower';
import { Wall } from './components/Wall';
import { Card } from './components/Card';
import { Resources } from './components/Resources';
import { PlayerName } from './components/PlayerName';

import background from 'file!./images/background.png'

export class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Tower height={100} color="red" style={styles.leftTower} />
        <Wall height={100} style={styles.leftWall} />
        <Wall height={100} style={styles.rightWall}  />
        <Tower height={100} color="blue" style={styles.rightTower} />
        <PlayerName name="Player 1" style={styles.leftPlayerName} />
        <PlayerName name="Player 2" style={styles.rightPlayerName} />
        <Resources
          bricks={3}
          brickProduction={2}
          gems={4}
          gemProduction={6}
          recruits={7}
          recruitProduction={10}
          style={styles.leftResources}
        />
        <Resources
          bricks={3}
          brickProduction={2}
          gems={4}
          gemProduction={6}
          recruits={7}
          recruitProduction={10}
          style={styles.rightResources}
        />
      <div style={styles.hand}>
        <Card
          color="red"
          cost={0}
          description="Description"
          name="Name"
          image={{row: 0, column: 0}}
        />
        <Card
          color="red"
          cost={0}
          description="Description"
          name="Name"
          image={{row: 0, column: 0}}
        />
        <Card
          color="red"
          cost={0}
          description="Description"
          name="Name"
          image={{row: 0, column: 0}}
        />
        <Card
          color="red"
          cost={0}
          description="Description"
          name="Name"
          image={{row: 0, column: 0}}
        />
      </div>
      </div>
    );
  }
}

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
    left: 91
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
  }
}
