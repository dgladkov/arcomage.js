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
        bricks: state.bricks + action.value > 0 ? state.bricks + action.value : 0,
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
