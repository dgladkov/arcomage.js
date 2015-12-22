import React, { Component } from 'react';
import { Tower } from './components/Tower';
import { Wall } from './components/Wall';
import { Card } from './components/Card';
import { Resources } from './components/Resources';

import background from 'file!./images/background.png'

export class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Tower height={100} color="red" />
          <Tower height={150} color="blue" />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Wall height={100} />
          <Wall height={80} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Resources
            bricks={3}
            brickProduction={2}
            gems={4}
            gemProduction={6}
            recruits={7}
            recruitProduction={10}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Card
            color="red"
            cost={0}
            name="Brick Shortage"
            description="All players lose 8 bricks"
            image={{column: 0, row: 0}}
          />
          <Card
            color="red"
            cost={0}
            name="Strip Mine"
            description="+1 Quarry, +10\nwall. You gain 5 gems"
            image={{column: 1, row: 8}}
          />
          <Card
            color="red"
            cost={1}
            name="Brick Shortage"
            description="All players lose 8 bricks"
            image={{column: 0, row: 0}}
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
  }
}
