import * as types from '../constants/ActionTypes';
import { HAND_SIZE } from '../constants/config.js';
import { shuffleArray } from '../utils';
import cards from 'json!../cards.json';

const initialState = {
  isPlayerTurn: true,
  player: {
    tower: 100,
    wall: 100,
    deck: cards.slice(0),
    hand: [],
    brickProduction: 1,
    bricks: 2,
    gemProduction: 3,
    gems: 4,
    recruitProduction: 5,
    recruits: 6,
  },
  opponent: {
    tower: 80,
    wall: 70,
    deck: cards.slice(0),
    hand: [],
    brickProduction: 2,
    bricks: 5,
    gemProduction: 4,
    gems: 3,
    recruitProduction: 6,
    recruits: 7,
  },
};

function changeIntValue(current, toChange) {
  const valueToSet = current + toChange;
  return valueToSet > 0 ? valueToSet : 0;
}

function actor(state, action) {
  switch (action.type) {
    case types.SHUFFLE_DECK:
      return {
        ...state,
        deck: shuffleArray(state.deck),
      };
    case types.DEAL_CARDS:
      const cardsToDeal = HAND_SIZE - state.hand.length;
      return {
        ...state,
        hand: state.deck.slice(-cardsToDeal),
        deck: state.deck.slice(0, -cardsToDeal),
      };
    case types.CHANGE_BRICKS:
      return {
        ...state,
        bricks: changeIntValue(state.bricks, action.value),
      };
    case types.CHANGE_GEMS:
      return {
        ...state,
        gems: changeIntValue(state.gems, action.value),
      };
    case types.CHANGE_RECRUITS:
      return {
        ...state,
        recruits: changeIntValue(state.recruits, action.value),
      };
    case types.CHANGE_TOWER:
      return {
        ...state,
        tower: changeIntValue(state.tower, action.value),
      };
    case types.CHANGE_WALL:
      return {
        ...state,
        wall: changeIntValue(state.wall, action.value),
      };
    default:
      return state;
  }
}

export default function game(state = initialState, action) {
  const actorState = state[action.actor];
  switch (action.type) {
    case types.BEGIN_TURN:
      return {
        ...state,
        isPlayerTurn: true,
      };
    case types.END_TURN:
      return {
        ...state,
        isPlayerTurn: false,
      };
    default:
      return {
        ...state,
        [action.actor]: actor(actorState, action),
      };
  }
}
